import React, { Component, useEffect, useState } from "react";
import Facultyservice from '../../Services/Facultyservice';
import { Link } from "react-router-dom";
import './style.css';
import Sidebar from "../content/sidebar";
import { Button } from "bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
// class All extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             results: []
//         };
//     }
//     componentDidMount() {
//         Facultyservice.getalldata().then(response => { this.setState({ results: response.data }) });
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
//                         <tbody>
//                             {this.state.results.map((result) => (
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
function All() {
    const [alldata, setAlldata] = useState([]);
    const [timer, setTimer] = useState(0);

    function ongenerateExcel() {
        Facultyservice.export().then((res) => {

            console.log(res.data.data)
            var binaryData = atob(res.data.data);

            const blob = new Blob([new Uint8Array(binaryData.length).map((_, index) => binaryData.charCodeAt(index))], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });

            // Create a URL for the blob
            // const url = window.URL.createObjectURL(new Blob([res.data.data]));
            const url = window.URL.createObjectURL(blob);

            // Create a link element to trigger the download
            const a = document.createElement('a');
            a.href = url;
            // a.download = 'EmployeeList.xlsx'; 
            a.setAttribute('download', 'data.xlsx');
            document.body.appendChild(a);
            a.click();
            // Revoke the object URL to free up resources
            // window.URL.revokeObjectURL(url);
        });
    }

    function deletee(index) {
        const newArrayy = [...alldata];
        newArrayy.splice(index, 1);
        setAlldata(newArrayy);
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const token = localStorage.getItem('token');
    //             console.log('Token:', token);
    //             if (token) {
    //                 await Facultyservice.getalldata({
    //                     headers: {
    //                         'Authorization':'Bearer '+token
    //                     }
    //                 }).then((res) => {
    //                     setAlldata(res.data)
    //                 })
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             // Handle error (e.g., show an error message)
    //         }
    //     };

    //     fetchData();
    // }, []);
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        // if (token) {
        //     Facultyservice.getalldata({
        //         headers: {
        //             'Authorization': 'Bearer ' + token
        //         }
        //     }).then((res) => {
        //         setAlldata(res.data)
        //     })
        // }
        if (token) {
            axios.get("http://localhost:5281/api/Publish/Get", {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((res) => {
                setAlldata(res.data);
            }).catch((error) => {
                // Handle errors
                console.error("Error fetching data:", error);
            });
        } else {
            // Handle case where token is missing or invalid
            alert("Error found")
            console.error("No valid token found.");
        }
    }, []);

    return (
        <div >
            <div>
                <Sidebar />;
            </div>
            <div>
                <button style={{ float: 'right' }} onClick={ongenerateExcel}>export</button>
                <Link to={"/Faculty"} style={{ float: 'right' }}> <button className="btn">Go to Faculty list</button></Link>
                <Link to={"/Student"} style={{ float: 'right' }}> <button className="btn">Go to Student list</button></Link>
                <div class="bg-circles">
                    <div class="circle-1"></div>
                    <div class="circle-2"></div>
                    <div class="circle-3"></div>
                    <div class="circle-4"></div>
                </div>

                <h1 class="centerr">All Results</h1>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>token</th>
                            <th>publicationdetail</th>
                            <th>publishername</th>
                            <th>dateofpublish</th>
                            <th>publisherType</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            alldata.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.publicationdetail}</td>
                                    <td>{item.publishername}</td>
                                    <td>{item.dateofpublish}</td>
                                    <td>{item.publisherType}</td>
                                    <td>
                                        <button className="btn" onClick={() => deletee(index)}>delete</button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>



    )
}


export default All;