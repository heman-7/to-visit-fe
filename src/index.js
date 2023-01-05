import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import setupAxiosInterceptors from "./Service/AuthenticationService";

ReactDOM.render(<App />, document.getElementById("root"));

setupAxiosInterceptors();
