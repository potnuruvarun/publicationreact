import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export function ExcelToJsonConverter() {
    const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState("");

    const handleConvert = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                // const json = XLSX.utils.sheet_to_json(worksheet);
                const json = XLSX.utils.sheet_to_csv(worksheet, { header: 1 });
                console.log(jsonData);
                setJsonData(JSON.stringify(json, null, 2));
            };
            reader.readAsBinaryString(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept=".xls,.xlsx"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={handleConvert}>Convert</button>
            <pre>{jsonData}</pre>
        </div>
    );
}