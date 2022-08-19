import React,{useState, useRef, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";
import "./regular/icofont.min.css";
import "./Brand Icons 2/icofont.min.css";

import "./Style.css";

const SignInForm = () => {
  const [error, setError] = useState("");
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();

  const handleSubmit = async function (e){
      e.preventDefault();

      // if(passwordRef.current.value !== passwordConfirmRef.current.value ){
      //     return setError("password do not match");
      // }
      try{
          setError('');
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);
          navigate("/dashboard")
      }catch{
          setError("Incorrect email or password");
      }
      setLoading(false);


      
  }
  



  return (
    
      <div className='signinform'>
        <div className='right2'>
          <h2>Drupella</h2>
        <button><Link to="/signupform">Sign Up</Link></button>

        </div>
         
          
          <div className='signInContainer' >
                      <div className='left runLeft'>
                          {/* <SignInForm/> */}

                                  <div className='sign'>
                                              <h1>Sign In with Drupella</h1>
                                               {error && <div>{error}</div> }

                                              <div className='upperIcons'>
                                                  <i className='icofont-facebook'></i>
                                                  <i className='icofont-google-plus'></i>
                                                  <i className='icofont-linkedin'></i>
                                              </div>
                                              <p className='or'>-or use your email account-</p>

                                              <form onSubmit={handleSubmit}>
                                                  <div className='form-input'>
                                                          <i className='icofont-envelope'></i>
                                                          <input type="text" placeholder='email' ref={emailRef}/>
                                                  </div>

                                                  <div className='form-input'>
                                                          <i className='icofont-lock' placeholder='Email'></i>
                                                          <input type="password" ref={passwordRef} placeholder='Password'/>
                                                  </div>
                                                  <button disabled={loading}>Sign In</button>


                                              </form>

                                              <p className='forgot' ><Link style={{color:"grey"}} to="/forgotpassword">Forgot your password?</Link></p>

                              
                                  </div>

                      </div>
                      <div className='right runRight'
                      
                      
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
          
      )
  
  
}

export default SignInForm;
