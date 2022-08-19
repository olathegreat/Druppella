import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Overall from "./components/Overall";
import App from "./components/App"
import {AuthProvider} from "./components/Contexts/AuthContext"




ReactDOM.render(
    
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
     <App/>
  </AuthProvider>
 
  </BrowserRouter>
</React.StrictMode>,

    document.querySelector("#root")
);