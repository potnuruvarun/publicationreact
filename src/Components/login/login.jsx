import React, { useEffect, useState } from "react";
import "./css/style.css";
import { Link } from "react-router-dom";
import Facultyservice from "../../Services/Facultyservice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { counter } from "@fortawesome/fontawesome-svg-core";
import Location from "./location";
import { useDispatch } from "react-redux";
import { loginn } from "../../store/authslice";
import ChatbotComponent from "../Chatbot/chatbot";

function Loginpage() {
    const dispatch = useDispatch()
    const [chance, setChance] = useState(3);
    const [logindata, setlogindata] = useState([
        {
            email: "",
            password: "",
        },
    ]);
    useEffect(() => {
        localStorage.removeItem("count");
    }, []);

    // function contactt() {
    //     <Popup trigger={<button> Trigger</button>} position="right center">
    //         <div>Popup content here !!</div>
    //     </Popup>
    // }
    // const notifySuccess = () => toast.success("Login Successful!");
    function login(event) {
        event.preventDefault();
        debugger
        // var obj = {  
        //     email: document.getElementById("email").value,
        //     password: document.getElementById("password").value
        // }

        console.log(logindata);

        Facultyservice.login(logindata)
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    toast.success("successful");
                    dispatch(loginn())
                    localStorage.removeItem("count");
                    window.location.href = "/Home";
                } else {
                    setChance(chance - 1);
                    localStorage.removeItem("token");
                    localStorage.setItem("count", chance);
                    console.log(chance);
                    window.location.href("/");
                    toast.error("fAILED");
                    delete axios.defaults.headers.common["Authorization"];
                    const response = localStorage.getItem("count");
                    if (response <= 3) {
                        toast.info("You have " + response + " login attempts left.");
                    }
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    setChance(chance - 1);
                    localStorage.setItem("count", chance);
                    const response = localStorage.getItem("count");
                    if (response == 0) {
                        axios.post("http://localhost:5281/api/Login/verify", logindata).then((res) => {
                            alert('Your account has been blocked due to multiple failed attempts. Please contact the administrator for')
                        })
                    }
                    else if (response > 0) {
                        toast.error("You have " + response + " login attempts left.");
                        // axios.post(logindata).post(`http://localhost:5281/api/Login/verify"/${logindata}`).then((res) => {
                        //     alert('Your account has been blocked due to multiple failed attempts. Please contact the administrator for')
                        // })

                    }
                } else {
                    alert("An error occurred:" + error)
                }
            });


    }

    return (
        <div>
            <div className="main">
                <ToastContainer />
                <div className="container1">
                    <div className="logo"></div>
                    <div className="titulo">
                        <h1>Welcome...Dear</h1>
                        <p className="sub">Please log in to continue.</p>
                    </div>
                    <form id="form">
                        <div className="form-control" style={{ height: "auto" }}>
                            <label for="email">Email</label>
                            <input
                                type="text"
                                required
                                id="email"
                                placeholder="Enter Email"
                                onChange={(e) =>
                                    setlogindata({ ...logindata, email: e.target.value })
                                }
                            />
                            <i id="icon2" onclick="eyeClick()" className=""></i>
                            <i className="fa-solid fa-circle-check"></i>
                            <small>Not in Valid Email Format</small>
                        </div>

                        <div className="form-control" style={{ height: "auto" }}>
                            <label for="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                onChange={(e) =>
                                    setlogindata({ ...logindata, password: e.target.value })
                                }
                            />
                            <i id="icon" onclick="eyeClick()" className=""></i>
                            <i onclick="eyeClick()" className="fa-solid fa-circle-check"></i>
                            <small>Enter Correct PassWord</small>
                        </div>

                        <div className="lemb-esq">
                            <div className="checkbox">
                                <input type="checkbox" className="checkbox-box" />
                                <p className="Lembrar">Remember Me</p>
                            </div>
                            {/* <!-- <p className="re_senha">Recuperar senha</p> --> */}
                        </div>

                        <button className="button-entrar" onClick={login} type="submit">
                            Log In
                        </button>
                        <Link to={"/registration"}>
                            <button className="button-criar" type="submit">
                                Create Account
                            </button>
                        </Link>
                        <hr />
                        <Link to={"/forgot"}>
                            <a type="submit">forgot password</a>
                        </Link>
                        <hr></hr>
                        <div>
                            <a href="contactus" >Complient</a>


                        </div>
                        <h1></h1>
                    </form>
                </div>
                <div class="container2">
                    <img
                        src="https://raw.githubusercontent.com/wesleytrindade17/Login-Screen-Desktop/main/img/imagem.jpg"
                        alt="imagem"
                        width="100%"
                        height="100%"
                    />
                </div>
                <ChatbotComponent></ChatbotComponent>
            </div>
            {/* <footer className="main">
                <div className="container1">
                <div className="titulo">
                        <h1>Contct us</h1>
                        <p className="sub"><a href="https://www.shaligraminfotech.com/">www.shaligram.com</a></p>
                    </div>
                </div>
                <div className="container1">
                <Location/>

                </div>
                
            </footer> */}
        </div>

    );
}
export default Loginpage;
