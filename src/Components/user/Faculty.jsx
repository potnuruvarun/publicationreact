import { Component, React } from "react";
import Facultyservice from "../../Services/Facultyservice";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
        })
    }, []);


    return(
        <div>
         <Link to={"/home"}>  <button className="btn">Go to Home</button></Link>
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