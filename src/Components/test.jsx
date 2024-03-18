import React, { useState } from "react";
import { Counter} from "../Components/counter.js";
import { useNavigate } from "react-router-dom";
export default function Test() {
    const [formdata, setFormdata] = useState([{ FirstName: "", LastName: "" }]);
    const  navigate = useNavigate();

    function submitdata(event) {
        event.preventDefault();
        console.log(formdata.FirstName)
        navigate('/demo');
    }
    return (
        <>
            <form action="">
                <label htmlFor="LastName">Enter first name
                    <input type="text" name="FirstName" id="FirstName" onChange={(e) => setFormdata({ ...formdata, FirstName: e.target.value })} />
                </label>
                <label htmlFor="LastName">enter last name
                    <input type="text" name="LastName" id="LastName" />
                </label>
                <button onClick={submitdata}>submit</button>
            </form>
            <div>
                <Counter></Counter>
            </div>
        </>

    )
}
