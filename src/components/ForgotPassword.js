import React,{useState, useRef, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";
import "./regular/icofont.min.css";
import "./Brand Icons 2/icofont.min.css";

import "./Style.css";

const ForgotPassword = () => {

  const [error, setError] = useState("");
  const[loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const emailRef = useRef();
  const passwordRef = useRef();
  const {reset} = useAuth();

  const handleSubmit = async function (e){
      e.preventDefault();

      // if(passwordRef.current.value !== passwordConfirmRef.current.value ){
      //     return setError("password do not match");
      // }
      try{
         setMessage('');
          setError('');
          setLoading(true);
          await reset(emailRef.current.value);
          setMessage("check your inbox for further instruction")
    
      }catch{
          setError("fail to reset pasword ");
      }
      setLoading(false);


      
  }
  



  return (
    <div className='forgotpassword'>
        <div className='right2'>
        <h2>Druppella</h2>
        <button><Link to="/signupform">Sign Up</Link></button>
        </div>
          <div className='signInContainer' >
                      <div className='left'>
                          {/* <SignInForm/> */}

                                  <div className='sign'>
                                              <h1>Password Reset</h1>
                                               {error && <div>{error}</div> }
                                               {message && <div>{message}</div>}

                                            
                                              

                                              <form onSubmit={handleSubmit}>
                                                  <div className='form-input'>
                                                          <i className='icofont-envelope'></i>
                                                          <input type="text" placeholder='email' ref={emailRef}/>
                                                  </div>

                                                 
                                                  <button disabled={loading}>Reset Password</button>


                                              </form>

                                              <p className='forgot'><Link to="/">Go back to login</Link></p>

                              
                                  </div>

                      </div>
                      <div className='right'
                      
                      
                      >

                      {/* <SignInRight checkerPass={changer}/> */}
                                  <div className='signOption'>
                                      <h1>Hello, Friend!</h1>
                                      <p>Enter your personal details <br/> and start journey with us</p>

                                      <button><Link to="/signupform">Sign Up</Link></button>
                              </div>

                      </div>
                      
      

          </div>
      
      
    </div>
  );
}

export default ForgotPassword;
