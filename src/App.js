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

function App() {
  return (  
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={loginpage}></Route>
      <Route  path="*" Component={Error}></Route>
        <Route path="/Home" Component={All}></Route>
        <Route path="/Faculty" Component={Faculty}></Route>
        <Route path="/Student" Component={Student}></Route>
        <Route path="/Demo" Component={Demo}></Route>
        <Route path="/demoo" Component={demo}></Route>
        <Route path="/registration" Component={Registration}></Route>
        <Route path="/forgot" Component={Forgot}></Route>
     
        
        {/* <Route path='/' element={<Error />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
