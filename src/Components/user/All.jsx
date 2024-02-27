import React, { Component, useEffect, useState } from "react";
import Facultyservice from '../../Services/Facultyservice';
import { Link } from "react-router-dom";
import './style.css';
import Sidebar from "../content/sidebar";
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

    useEffect(() => {
        Facultyservice.getalldata().then((res) => {
            setAlldata(res.data)
            if (timer === 1000) {
                console.log(timer)
                localStorage.clear();
            }
        })
        console.log(alldata);
    }, []);
    return (
        <div >
            <div>
                <Sidebar />;
            </div>
            <div>
                <Link to={"/Faculty"} style={{float:'right'}}> <button className="btn">Go to Faculty list</button></Link>
                <Link to={"/Student"} style={{float:'right'}}> <button className="btn">Go to Student list</button></Link>
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