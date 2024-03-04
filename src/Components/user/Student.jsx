import React, { Component } from "react";
import Facultyservice from "../../Services/Facultyservice";
import { Link } from "react-router-dom";
import './style.css'

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Student: []
        }
    }
    componentDidMount() {
        Facultyservice.getstudentdata().then((res) => this.setState({ Student: res.data })) .catch((error) => {
            if (error.response && error.response.status === 401) {
                alert("Server is down or you are not Authenticated");
            } else {
                alert("server is down")
                console.error("An error occurred:", error);
            }
        });
    }
    render() {
        return (
            <div>
                <Link to={"/Faculty"}> <button className="btn">Go to Faculty list</button></Link>
                <div class="bg-circles">
                    <div class="circle-1"></div>
                    <div class="circle-2"></div>
                    <div class="circle-3"></div>
                    <div class="circle-4"></div>
                </div>
                <div className="table-wrapper">
                    <button>Export</button>
                    <h1 class="centerr">All Results</h1>
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th>publicationdetail</th>
                                <th>publishername</th>
                                <th>dateofpublish</th>
                                <th>publisherType</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Student.map((result) => (
                                <tr key={result.id}>
                                    <td>{result.publicationdetail}</td>
                                    <td>{result.publishername}</td>
                                    <td>{result.dateofpublish}</td>
                                    <td>{result.publisherType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Student;