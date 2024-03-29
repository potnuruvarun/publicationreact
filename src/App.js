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
import Loginpage from "./Components/login/login";
import Registration from "./Components/registration/registration";
import Forgot from "./Components/registration/forgotpassword";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Test from "./Components/test";
import Contactus from "./Components/login/contactus";
import location from "./Components/login/location";
// import ProtectedRoute from "./store/ProtectedRoute";
import ChatbotComponent from "./Components/Chatbot/chatbot";
import Chatmasala from "./Components/Chatbot/chatt.js";
import gpt from "./Components/Chatbot/aichat";
import WebsiteComponent from "./Components/livestream/livewebsite";
import StockGraphComponent from "./Components/livestream/Stockgraph";
import Mainpage from "./Components/Task/practice.jsx";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Captcha from "./Components/login/captcha.jsx";

function App() {
  return (
    <GoogleOAuthProvider clientId="269454792153-rss16496mirh4fct923tatmupblsgdln.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
        <Route path="/captcha" Component={Captcha}></Route>
          <Route path="/task" Component={Mainpage}></Route>
          <Route path="/graph" Component={StockGraphComponent}></Route>
          <Route path="/live" Component={WebsiteComponent}></Route>
          <Route path="/gpt" Component={gpt}></Route>
          <Route path="/ai" Component={Chatmasala}></Route>
          <Route path="/chat" Component={ChatbotComponent}></Route>
          <Route path="/" Component={Loginpage}></Route>
          <Route path="*" Component={Error}></Route>
          <Route path="/Home" Component={All}></Route>
          {/* <Route
            path="/Home"
            element={
              <ProtectedRoute>
                <All />
              </ProtectedRoute>
            }
          ></Route> */}
          <Route path="/Faculty" Component={Faculty}></Route>
          <Route path="/Student" Component={Student}></Route>
          <Route path="/Demo" element={<Demo brand="varun" />}></Route>
          <Route path="/demoo" Component={demo}></Route>
          <Route path="/registration" Component={Registration}></Route>
          <Route path="/forgot" Component={Forgot}></Route>
          <Route path="/test" Component={Test}></Route>
          <Route path="/" element={<Error />}></Route>
          <Route path="/contactus" Component={Contactus}></Route>
          <Route path="/location" Component={location}></Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
