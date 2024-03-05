// import React from 'react';
// // styling
// import "../login/css/Checkout.css";
// // images

// const Contactus = props => {
//     // function that takes boolean as param to conditionally display popup
//     const { setPopUp } = props 

//     return (
//         <div className="PopUp">
//             {/* x close window */}
//             <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
//             <div className="pu-content-container">
//                 <h1>Add more bones?</h1>
//             </div>
//             {/* button controls */}
//             <div className="pu-button-container">
//                 <button onClick={()=> setPopUp(false)}> MORE BONES! </button>
//                 <button onClick={()=> setPopUp(false)}> No, thank you. </button>
//             </div>
//         </div>
//     );
// }

// export default Contactus;

import React, { useState } from "react";
import Facultyservice from "../../Services/Facultyservice";

export default function Contactus() {
    const [formdata, setFormdata] = useState(
        {
            ToEmail: "",
            Subject: "",
            Body: "",
            Attachments: [],
        },
    );
    const formData = new FormData();
    formData.append("ToEmail", formdata.ToEmail);
    formData.append("Subject", formdata.Subject);
    formData.append("Body", formdata.Body);
    formdata.Attachments.forEach((attachment, index) => {
        formData.append("Attachments", attachment);
    });

    function onsupport(event) {
        event.preventDefault();
        Facultyservice.help(formData).then((res) => {
            console.log(res);
        })
        console.log(formdata)
    }
    function handleFileChange(event) {
        const files = Array.from(event.target.files);
        setFormdata({ ...formdata, Attachments: files });
    }

    return (
        <form action="">
            <label htmlFor="email">
                Enter Your Email
                <input
                    type="email"
                    name="email"
                    required 
                    id=""
                    onChange={(e) => setFormdata({ ...formdata, ToEmail: e.target.value })}
                />
            </label>
            <label htmlFor="text">
                Enter Your subject
                <input
                    type="text"
                    name="subject"
                    id=""
                    onChange={(e) => setFormdata({ ...formdata, Subject: e.target.value })}
                />
            </label>
            <label htmlFor="body">
                Enter Your Body
                <input
                    type="text"
                    name="body"
                    id=""
                    onChange={(e) => setFormdata({ ...formdata, Body: e.target.value })}
                />
            </label>
            <label htmlFor="">
                upload your files
                <input
                    type="file"
                    name=""
                    id="attachments"
                    onChange={handleFileChange}
                    multiple  // Allow multiple file selection
                />
            </label>
            <button type="submit" onClick={onsupport}>
                submit
            </button>
        </form>
    );
}
