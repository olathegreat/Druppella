import React from 'react';
import {Routes, Route} from "react-router-dom";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import "./Style.css";
import Dashboard from './Dashboard';
import SignInCard from './SignInCard';
import UpdateProfile from './UpdateProfile';
import ForgotPassword from './ForgotPassword';


const App = () => {
  return (
    <Routes>
       <Route exact path='/' element={<SignInCard/>}/>
       <Route path='/forgotpassword' element={<ForgotPassword/>}/>
       <Route path='/update-profile' element={<UpdateProfile/>}/>
       

       <Route path='/signinform' element={<SignInForm/>}/>
       <Route path='/signupform' element={<SignUpForm/>}/>


       <Route path="/dashboard" element={<Dashboard/>}/>
    


   </Routes> 
    
   
  );
}

export default App;
