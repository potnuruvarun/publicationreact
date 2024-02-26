import React, { useEffect, useState } from "react";
import Facultyservice from "../../Services/Facultyservice";
import axios from "axios";
import { Link } from "react-router-dom";

function Forgot() {
    const [FormData, setformdata] = useState([]);
    const [showOTPField, setShowOTPField] = useState(false);
    const [showPasswordField, setShowPasswordField] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [submitbutton, setsubmitbutton] = useState(false);
    const [data,setdata]=useState([]);


    function submitotp(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        setformdata([...FormData, email]);

        console.log(email);
        if (email === "") {
            alert("Please enter your registered Email-Id");
        } else {
            try {
                axios.post(`http://localhost:5281/api/Login/${email}`).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setShowOTPField(true);
                        setShowPasswordField(true);
                        setEmailSubmitted(true);
                        setsubmitbutton(true);
                    } else {
                        alert("An error occurred while submitting the email.");
                    }
                });
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    alert("Invalid Email");
                } else {
                    console.error("An error occurred:", error);
                }
            }
        }
    }

    function submitpass()
    {
        const obj={
            email:document.getElementById('email').value,
            otp:document.getElementById('otp1').value,
            password:document.getElementById('password1').value
        }
        setdata([...data,obj]);
        console.log(data)
        Facultyservice.reset(obj).then((resp)=>{
            console.log(resp);
            if(resp.status===200){
                alert("password changed successfully");
                window.location.reload();
            }
        })

    }

    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-2">
                                                Forgot Your Password?
                                            </h1>
                                            <p class="mb-4">
                                                We get it, stuff happens. Just enter your email address
                                                below and we'll send you a link to reset your password!
                                            </p>
                                        </div>
                                        <form class="user">
                                            <div class="form-group">
                                                {/* <input
                                                    type="email"
                                                    name="email"
                                                    class="form-control form-control-user"
                                                    id="email"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                ></input> */}
                                                {emailSubmitted ? (
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        className="form-control form-control-user"
                                                        id="email"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Email Address"
                                                        readOnly
                                                    />
                                                ) : (
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control form-control-user"
                                                        id="email"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                    />
                                                )}
                                                {showOTPField && (
                                                    <input
                                                        type="number"
                                                        name="otp"
                                                        class="form-control form-control-user"
                                                        id="otp1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter otp..."
                                                    ></input>
                                                )}
                                                {showPasswordField && (
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        class="form-control form-control-user"
                                                        id="password1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter new password..."
                                                    ></input>
                                                )}
                                            </div>
                                            {submitbutton ? (<a
                                                onClick={submitpass}
                                                class="btn btn-primary btn-user btn-block"
                                            >
                                                Reset Password
                                            </a>) :
                                                (<a
                                                    onClick={submitotp}
                                                    class="btn btn-primary btn-user btn-block"
                                                >
                                                    SUBMIT
                                                </a>)

                                            }



                                        </form>
                                        <hr></hr>
                                        <div class="text-center">
                                            <a class="small" href="register.html">
                                                Create an Account!
                                            </a>
                                        </div>
                                        <div class="text-center">
                                            <a class="small" href="login.html">
                                                Already have an account? Login!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Forgot;
