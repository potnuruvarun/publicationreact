import { Component, React } from "react";
import Facultyservice from "../../Services/Facultyservice";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import XLSX from'xlsx';
// export default class Faculty extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             faculties:[],
//         }
//     }
//     componentDidMount(){
//         Facultyservice.getfacultydata().then((res)=>this.setState({faculties: res.data}))
//     }
//     render() {
//         return (
//             <div>
//                 <div class="bg-circles">
//                     <div class="circle-1"></div>
//                     <div class="circle-2"></div>
//                     <div class="circle-3"></div>
//                     <div class="circle-4"></div>
//                 </div>
//                 <div className="table-wrapper">
//                 <h1 class="centerr">All Results</h1>
//                     <table className="fl-table">
//                         <thead>
//                             <tr>
//                                 <th>publicationdetail</th>
//                                 <th>publishername</th>
//                                 <th>dateofpublish</th>
//                                 <th>publisherType</th>
//                             </tr>
//                         </thead>
//                         <tbody >
//                             {this.state.faculties.map((result) => (
//                                 <tr key={result.id}>
//                                     <td>{result.publicationdetail}</td>
//                                     <td>{result.publishername}</td>
//                                     <td>{result.dateofpublish}</td>
//                                     <td>{result.publisherType}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }
export default function Faculty() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        Facultyservice.getfacultydata().then((res) => {
            setResults(res.data)
        }) .catch((error) => {
            if (error.response && error.response.status === 401) {
                alert("Server is down or you are not Authenticated");
            } else {
                alert("server is down")
                console.error("An error occurred:", error);
            }
        });
    }, []);

    // function exportexcel() {
    //     console.log(results);
    //     const blob = new Blob([results], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    //     const url = window.URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'EmployeeList.txt'; // Set the desired file name
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    // }
    function exportexcel() {
        console.log(results);
        const dataAsString = JSON.stringify(results, null, 2); // Convert data to string
        const blob = new Blob([dataAsString], { type: 'text/plain' }); // Set MIME type to text/plain
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'EmployeeList.txt'; // Set the desired file name
        a.click();
        window.URL.revokeObjectURL(url);
    }
    // function exportexcel() {
    //     console.log(results);
    //     // Convert data to an array of arrays
    //     const dataArray = results.map(row => Object.values(row));
        
    //     // Create a new workbook
    //     const wb = XLSX.utils.book_new();
    //     const ws = XLSX.utils.aoa_to_sheet(dataArray);
    //     XLSX.utils.book_append_sheet(wb, ws, 'EmployeeList');
    
    //     // Convert workbook to binary data
    //     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    
    //     // Convert binary data to Blob
    //     const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    //     // Create a URL for the Blob
    //     const url = window.URL.createObjectURL(blob);
    
    //     // Create a link element to trigger the download
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'EmployeeList.xlsx'; // Set the desired file name
    //     a.click();
    
    //     // Revoke the object URL to free up resources
    //     window.URL.revokeObjectURL(url);
    // }






    return (
        <div>
            <Link to={"/home"}>  <button className="btn">Go to Home</button></Link>
            <div class="bg-circles">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <div class="circle-3"></div>
                <div class="circle-4"></div>
            </div>
            <h1 class="centerr">All Results</h1>
            <button onClick={exportexcel}>Export excel</button>
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>token</th>
                        <th>publicationdetail</th>
                        <th>publishername</th>
                        <th>dateofpublish</th>
                        <th>publisherType</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        results.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.publicationdetail}</td>
                                <td>{item.publishername}</td>
                                <td>{item.dateofpublish}</td>
                                <td>{item.publisherType}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )


}