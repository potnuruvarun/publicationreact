import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Error from "./Error";
import All from "./Components/user/All";
import Faculty from "./Components/user/Faculty";
import Student from "./Components/user/Student";
import Demo from "./Components/user/demo";
import demo from "./Components/user/demoo";
import log from "./Components/login/login";
import Loginpage from "./Components/login/login";
import Registration from "./Components/registration/registration";
import Forgot from "./Components/registration/forgotpassword";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Test from "./Components/test";
import Contactus from "./Components/login/contactus";
function App() {
  return (
    <GoogleOAuthProvider clientId="269454792153-rss16496mirh4fct923tatmupblsgdln.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Loginpage}></Route>
          <Route path="*" Component={Error}></Route>
          <Route path="/Home" Component={All}></Route>
          <Route path="/Faculty" Component={Faculty}></Route>
          <Route path="/Student" Component={Student}></Route>
          <Route path="/Demo" element={<Demo brand="varun" />}></Route>
          <Route path="/demoo" Component={demo}></Route>
          <Route path="/registration" Component={Registration}></Route>
          <Route path="/forgot" Component={Forgot}></Route>
          <Route path="/test" Component={Test}></Route>
          <Route path="/" element={<Error />}></Route>
          <Route path="/contactus" Component={Contactus}></Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
