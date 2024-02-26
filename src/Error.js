import React from "react";
import { Link } from "react-router-dom";
import './Components/user/style.css'

function error() {
  return (
    <div class="text-center pt-2 pb-7">
      <h1>Something went wrong.</h1>
      <p>We are sorry for the inconvenience. Please try again later.</p>
      <div class="bg-circles">
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-3"></div>
          <div class="circle-4"></div>
        </div>
      <div class="text-center pt-2 pb-7">
        <h1 class="remix-caught-status remix-text-glow">
          <p>4</p>
          <p>0</p>
          <p>4</p>
        </h1>
        <div class="text-base font-mono">That page was not found!</div>
        <div className=" text-base font-mono">
          <Link to="/home">
            {" "}
            <button className="btn">Go to Home</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default error;
