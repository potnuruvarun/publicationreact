import React, { useEffect, useState } from "react";
import Facultyservice from "../../Services/Facultyservice";
import './regist.css';
import '../startbootstrap-sb-admin-2-gh-pages/vendor/fontawesome-free/css/all.min.css';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const navigate = useNavigate();

    const clientId = "269454792153-rss16496mirh4fct923tatmupblsgdln.apps.googleusercontent.com";
    const [profilePhoto, setProfilePhoto] = useState(null);
    const handleSuccess = (credentialResponse) => {
        const credentialsdata = jwtDecode(credentialResponse.credential);
        console.log(credentialsdata.email_verified)
        if (credentialsdata.
            email_verified === true) {
                // <Navigate to="/Home" replace={true} />
                navigate('/home', { replace: true });

        }
        else {
            alert("error");
        }
        // const authorizationCode = credentialResponse.code;
        // fetch('/api/auth/google', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ code: authorizationCode }),
        // })
        //     .then(response => response.json())
        //     // .then(data => {
        //     //     console.log('Login successful, backend response:', data);
        //     // })
        //     .catch(error => {
        //         console.error('Error exchanging authorization code:', error);
        //     });
        console.log(credentialResponse);
    };
    // const onSuccess = (res) => {
    //     console.log("succes",res)
    // }

    const handleError = () => {
        console.log('Login Failed');
    };

    function uploadFile(event) {
        setProfilePhoto(event.target.files[0]);
    }

    function submitform(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("Fullname", document.getElementById("name").value);
        formData.append("MobileNumber", document.getElementById("phonenumber").value);
        formData.append("Email", document.getElementById("email").value);
        formData.append("password", document.getElementById("password").value);
        formData.append("Address", document.getElementById("address").value);
        if (profilePhoto) {
            formData.append("photodata", profilePhoto);
        }

        Facultyservice.register(formData).then((res) => {
            console.log(res);
        })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    alert("Invalid Username or Password");
                } else {
                    console.error("An error occurred:", error);
                }
            });
        ;
    }

    return (
        // <form enctype="multipart/form-data">
        //     <label htmlFor="">
        //         {" "}
        //         Enter Your name
        //         <input type="text" name="name" id="name" />
        //     </label>
        //     <label htmlFor="">
        //         Enter Your mobile
        //         <input type="text" name="phonenumber" id="phonenumber" />
        //     </label>
        //     <label htmlFor="">
        //         Enter Your email
        //         <input type="text" name="email" id="email" />
        //     </label>
        //     <label htmlFor="">
        //         Enter Your password
        //         <input type="password" name="password" id="password" />
        //     </label>
        //     {/* <label htmlFor="">
        //         Enter Your password
        //         <input type="text" name="confirm-password" id="confirm-password" />
        //     </label> */}
        //     <label htmlFor="">
        //         Enter Your address
        //         <input type="text" name="address" id="address" />
        //     </label>
        //     <label htmlFor="">
        //         Enter Your address
        //         <input type="file" name="photo" id="photo" onChange={uploadFile} accept=".png, .jpg, .jpeg" />
        //     </label>
        //     <button onClick={submitform}>submit</button>
        // </form>
        <div class="container">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-block  bg-register-image"></div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user" >
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" class="form-control form-control-user" id="name"
                                                placeholder="First Name"></input>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="number" class="form-control form-control-user" id="phonenumber"
                                                placeholder="Phone number"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user" id="email"
                                            placeholder="Email Address"></input>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" class="form-control form-control-user"
                                                id="password" placeholder="password"></input>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-user"
                                                id="address" placeholder="enter your address"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="file" name="photo" id="photo" onChange={uploadFile} accept=".png, .jpg, .jpeg" />
                                    </div>
                                    <a href="login.html" class="btn btn-primary btn-user btn-block" onClick={submitform}>
                                        Register Account
                                    </a>
                                    <hr></hr>
                                    {/* <a href="index.html" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Register with Google
                                    </a> */}
                                    <GoogleLogin
                                        onSuccess={handleSuccess}
                                        onError={handleError}
                                        clientId={clientId}
                                    />
                                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </a>
                                </form>
                                <hr></hr>
                                <div class="text-center">
                                    <a class="small" href="/forgot">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <a class="small" href="/">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}
