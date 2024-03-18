import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import Facultyservice from "../../Services/Facultyservice";
import { useEffect } from "react";
import './flag.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Tag } from "primereact/tag";
import { ExcelToJsonConverter } from "../user/excelsheet";
import * as Filesaver from "file-saver";
import XLSX from 'sheetjs-style';
import { Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Mainpage() {
    const fileName = "myfile";
    const [selectedCustomers, setSelectedcustomers] = useState([])
    const [products, setProducts] = useState([]);
    const paginatorLeft = <Button type="button" onClick={resetDatatable} icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" onClick={() => ExportExcel(selectedCustomers, fileName)} icon="pi pi-download" text />
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        publicationdetail: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        publishername: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        dateofpublish: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        publisherType: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    // const resetDatatable = () => {
    //     setSelectedcustomers([]);
    //     setGlobalFilterValue('');
    //     setFilters({
    //         global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    //         publicationdetail: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    //         publishername: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    //         dateofpublish: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    //         publisherType: { value: null, matchMode: FilterMatchMode.EQUALS }
    //     });
    // }
    
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [statuses] = useState(['Student', 'Teacher', 'string']);
    const getSeverity = (publisherType) => {
        switch (publisherType) {
            case 'Student':
                return 'info';

            case 'Teacher':
                return 'success';

            case 'string':
                return 'danger';
        }
    };
    useEffect(() => {
        Facultyservice.getalldata()
            .then((response) => {
                const newData = response.data.map((product, index) => ({ ...product, index: index + 1 }));
                setProducts(newData);
                setLoading(false)
            })
    }, []);



    function resetDatatable() {
        window.location.reload();
    }

    const onGlobalFilterChange = (e) => {
        console.log(e);
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.publisherType} severity={getSeverity(rowData.publisherType)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };


    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };
    useEffect(() => {
        console.log("Selected customers:", selectedCustomers);
    }, [selectedCustomers]);
    const header = renderHeader();

    const onSelectionChange = (event) => {
        const data = event.value;
        setSelectedcustomers(data);
    }


    const ExportExcel = () => {
        debugger
        console.log(selectedCustomers);
        if (!selectedCustomers || !Array.isArray(selectedCustomers) || selectedCustomers.length === 0) {
            toast.error('Please select at least one record');
            // alert("Selected customers empty.");
            return;
        }
        const fileType =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        const fileExtension = ".xlsx";

        const ws = XLSX.utils.json_to_sheet(selectedCustomers);
        // const workbook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(workbook, ws, "Sheet1");
        // XLSX.writeFile(workbook, "MYSavedData.xlsx");
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        Filesaver.saveAs(data, `${fileName}+ ${fileExtension}`);
    }
    return (

        //d=fied id important (means data)
        //header =hading 
        <div className="card">
              <ToastContainer />
            {/* <button onClick={() => ExportExcel(selectedCustomers, fileName)}>Export</button> */}

            <ExcelToJsonConverter />
            <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                dataKey="id" filters={filters} filterDisplay="row" loading={loading} onSelectionChange={onSelectionChange} selection={selectedCustomers}
                globalFilterFields={['publicationdetail', 'publishername', 'dateofpublish', 'publisherType']} header={header} emptyMessage="No customers found."
            >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column header="#" field="index" style={{ width: '5%' }}></Column>
                <Column field="publicationdetail" header="publicationdetail" filter filterPlaceholder="Search by Detail" sortable style={{ width: '25%' }}></Column>
                <Column field="publishername" header="publishername" filter sortable filterPlaceholder="Search by name" style={{ width: '25%' }}></Column>
                <Column field="dateofpublish" header="dateofpublish" filter sortable filterPlaceholder="Search by date" style={{ width: '25%' }}></Column>
                <Column field="publisherType" header="publisherType" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }}
                    body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate}
                    sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    )

}