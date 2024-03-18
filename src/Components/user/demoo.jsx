import { useContext, useState } from "react";
import { useEffect } from "react";
import { ExcelToJsonConverter } from "./excelsheet";
function Demoo() {
    const [array, setArray] = useState([]);
    const [formdata, setFormdata] = useState({ name: "", email: "", phonenumber: "" });
    const [newid, setNewid] = useState(null);

    useEffect(() => {
        console.log(array);
    }, [array]);

    function submitForm(event) {
        event.preventDefault();
        //alert("1");
        var obj = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
        }   

        if (obj.name == '') {
            document.getElementById("val1").innerHTML = "Enter somethig";
        }
        else {
            document.getElementById("val1").innerHTML = "";
        }
        if (obj.email == '') {
            document.getElementById("val2").innerHTML = "Enter somethig";
        }
        else {
            document.getElementById("val2").innerHTML = "";
            setArray([...array, obj]);

        }
        document.getElementById("form").reset();
    }

    function finddata(index) {
        const selecteddata = array[index];
        console.log(selecteddata)
        console.log(index);
        setFormdata({ name: selecteddata.name, email: selecteddata.email });
        setNewid(index)

    }

    function updateform(event) {
        event.preventDefault();
        console.log(newid)
        const updatedname = document.getElementById("name").value;
        const updateemail = document.getElementById("email").value;
        if (newid !== null) {
            const index = newid;
            if (index !== -1) {
                const newArray = [...array];
                newArray[index] = { email: updateemail };
                setArray(newArray);
            } else {
                alert("ID not found in the array");
            }
        } else {
            alert("Please select an ID to update");
        }
    }

    function ddelete(index) {
        const newArrayy = [...array];
        newArrayy.splice(index, 1);
        setArray(newArrayy);
    }
    return (
        <div>
          
            <div className="App">
                <ExcelToJsonConverter />
            </div>
            <form id="form">
                <label> Enter Your name
                    <input type="text" name="name" aria-required id="name" value={formdata.name} onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} placeholder="Name" /><br />
                    <p id="val1"></p>
                </label>
                <label>Enter Your email
                    <input type="text" name="email" id="email" value={formdata.email} onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} placeholder="Email Address" /><br />
                    <p1 id="val2"></p1>
                </label>
                <label> Enter Your phonenumber
                    <input type="text" name="phonenumber" id="phonenumber" />
                </label>
                <div className="display-linebreak">
                    <button className="btn" onClick={submitForm}>Submit</button>
                    <button className="btn" onClick={updateform}>update</button>
                </div>
            </form>

            <div>
                <div >
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                    <div className="circle-4"></div>
                </div>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array.map((item, index) => (
                                <tr key={index}>
                                    <th>{index}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><button onClick={() => finddata(index)}>find</button>
                                        <button onClick={() => ddelete(index)}>delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* {citydata.map(city => (
                <div key={city.cityid}>{city.cityname}</div>
            ))} */}
        </div>
    )




}
export default Demoo;