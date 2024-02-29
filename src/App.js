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
import loginpage from "./Components/login/login";
import Registration from "./Components/registration/registration";
import Forgot from "./Components/registration/forgotpassword";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Test from "./Components/test";

function App() {
  // const clientId="269454792153-rss16496mirh4fct923tatmupblsgdln.apps.googleusercontent.com"
  // useEffect(()=>{
  //   function start(){
  //     gapi.clientId.ini({
  //       clientId:clientId,
  //       scope:""
  //     })
  //   };
  //   gapi.load('client:auth2',start)
  // })
  return (
    <GoogleOAuthProvider clientId="269454792153-rss16496mirh4fct923tatmupblsgdln.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={loginpage}></Route>
          <Route path="*" Component={Error}></Route>
          <Route path="/Home" Component={All}></Route>
          <Route path="/Faculty" Component={Faculty}></Route>
          <Route path="/Student" Component={Student}></Route>
          <Route path="/Demo"  element={<Demo brand="varun" />}>
          </Route>
          <Route path="/demoo" Component={demo}></Route>
          <Route path="/registration" Component={Registration}></Route>
          <Route path="/forgot" Component={Forgot}></Route>
          <Route path="/test" Component={Test}></Route>

          {/* <Route path='/' element={<Error />}></Route> */}
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
