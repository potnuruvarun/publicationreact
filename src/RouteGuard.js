// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';
// const RouteGuard = ({ component: Component, ...rest }) => {

//    function hasJWT() {
//     debugger
//        let flag = false;

//        //check user has JWT token
//        localStorage.getItem("token") ? flag=true : flag=false

//        return flag
//    }

//    return (
//        <Route {...rest}
//            render={props => (
//                hasJWT() ?
//                    <Component {...props} />
//                    :
//                    <Navigate to="/" />
//            )}
//        />
//    );
// };
// export default RouteGuard;

import React, { useState, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import axios from "axios";

const RouteGuard = ({ component: Component, ...rest }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Send a request to the backend to verify the token
      axios
        .get("/api/verifyToken", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // If the token is valid, set isAuthorized to true
          setIsAuthorized(true);
        })
        .catch((error) => {
          // If the token is invalid or expired, remove it from local storage
          localStorage.removeItem("token");
          setIsAuthorized(false);
        });
    } else {
      setIsAuthorized(false);
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export default RouteGuard;

// import React, { useState, useEffect } from 'react';
// import { Navigate, Route } from 'react-router-dom';
// import axios from 'axios';

// const RouteGuard = ({ component: Component, ...rest }) => {
//     const [isAuthorized, setIsAuthorized] = useState(false);

//     useEffect(() => {
//         debugger
//         const token = localStorage.getItem('token');
//         if (token) {
//             // Send a request to the backend to verify the token
//             axios.get('/api/verifyToken', {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })
//             .then(response => {
//                 // If the token is valid, set isAuthorized to true
//                 setIsAuthorized(true);
//             })
//             .catch(error => {
//                 // If the token is invalid or expired, remove it from local storage
//                 localStorage.removeItem('token');
//             });
//         }
//     }, []);

//     return (
//         <Route {...rest}
//             render={props => (
//                 isAuthorized ?
//                     <Component {...props} />
//                     :
//                     <Navigate to="/" />
//             )}
//         />
//     );
// };

// export default RouteGuard;
