import React, { useState } from "react";
import './css/style.css';
import { Link } from "react-router-dom";
import Facultyservice from "../../Services/Facultyservice";
import axios from "axios";
function Loginpage() {
    const [logindata, setlogindata] = useState([{
        email: '',
        password: ''
    }])
    function login(event) {
        event.preventDefault();
        // var obj = {
        //     email: document.getElementById("email").value,
        //     password: document.getElementById("password").value
        // }

        console.log(logindata)
        Facultyservice.login(logindata).then((response) => {
            debugger
            console.log(response);
            if (response != '') {
                localStorage.setItem('token', response.data.token);
                if (response.data.token) {

                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    alert("Login Successfully");
                    window.location.href = '/Home';
                }
                else
                    delete axios.defaults.headers.common["Authorization"];

            }
            else {
                window.location.href('/');
                alert("Invalid Username or Password")
            }

        })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    alert("Invalid Username or Password");
                } else {
                    alert("server is down")
                    console.error("An error occurred:", error);
                }
            });
    }

    return (
        <div className="main">
            <div className="container1">
                <div className="logo">
                </div>
                <div className="titulo">
                    <h1>Welcome...Dear</h1>
                    <p className="sub">Please log in to continue.</p>
                </div>
                <form id="form" >
                    <div className="form-control" style={{ height: 'auto' }} >
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="Enter Email" onChange={(e) => setlogindata({ ...logindata, email: e.target.value })} />
                        <i id="icon2" onclick="eyeClick()" className=""></i>
                        <i className="fa-solid fa-circle-check"></i>
                        <small>Not in Valid Email Format</small>
                    </div>

                    <div className="form-control" style={{ height: 'auto' }}>
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password" onChange={(e) => setlogindata({ ...logindata, password: e.target.value })}
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

                    <button className="button-entrar" onClick={login} type="submit">Log In</button>
                    <Link to={"/registration"}>
                        <button className="button-criar" type="submit">Create Account</button>
                    </Link>
                    <hr />
                    <Link to={"/forgot"}>
                        <a type="submit">forgot password</a>
                    </Link>
                    <hr></hr>
                    <a href="contactus">Complient</a>
                </form>
            </div>
            <div class="container2">
                <img src="https://raw.githubusercontent.com/wesleytrindade17/Login-Screen-Desktop/main/img/imagem.jpg" alt="imagem" width="100%" height="100%" />
            </div>
        </div>


    );
}
export default Loginpage;
