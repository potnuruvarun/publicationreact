import React, { useState } from "react";

export default function Test() {
    const [formdata, setFormdata] = useState([{ FirstName: "", LastName: "" }]);

    function submitdata(event) {
        event.preventDefault();
        console.log(formdata.FirstName)
    }
    return (
        <form action="">
            <label htmlFor="LastName">Enter first name
                <input type="text" name="FirstName" id="FirstName" onChange={(e) => setFormdata({...formdata, FirstName : e.target.value})} />
            </label>
            <label htmlFor="LastName">enter last name
                <input type="text" name="LastName" id="LastName" />
            </label>
            <button onClick={submitdata}>submit</button>
        </form>

    )
}