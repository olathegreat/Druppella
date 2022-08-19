import React, {useState, useRef} from 'react';
import { useAuth } from "./Contexts/AuthContext";
import { Link,useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const [error, setError] = useState("");
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();

    const handleSubmit = async function (e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value ){
            return setError("password do not match");
        }
        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard")
        }catch{
            setError("Failed to create an account");
        }
        setLoading(false);


        
    }












  return (
    <div className='signupform'>

       <div className='right2'>
          <h2>Drupella</h2>
          <button><Link to="/">Sign In</Link></button>

        </div>
         
        
        
         <div className='signUpcontainer signInContainer'>
          
          
 
 
 
 
             

             <div className={"left"}>
                
 
                <div className='sign'>
                        <h1>Create Account</h1>
                        {error && <div>{error}</div> }
                
                        <div className='upperIcons'>
                            <i className='icofont-facebook'></i>
                            <i className='icofont-google-plus'></i>
                            <i className='icofont-linkedin'></i>
                        </div>
                        <p className='or'>-or use your email for registration-</p>
                
                        <form onSubmit={handleSubmit}>

                           

                            <div className='form-input'>
                                    <i className='icofont-envelope'></i>
                                    <input type="email" placeholder='email'  required ref={emailRef}/>
                            </div>
                
                            <div className='form-input'>
                                    <i className='icofont-lock'></i>
                                    <input type="password" ref={passwordRef} placeholder='Password'/>
                            </div>
                            <div className='form-input'>
                                    <i className='icofont-lock'></i>
                                    <input type="password" placeholder='confirm password' ref={passwordConfirmRef} />
                            </div>

                            <button disabled={loading} className='btns' type='submit'>SIGN UP</button>
                            
                
                        </form>
                
                        
                
                        
          
                   </div>
 
            </div>


            <div className= "right">
                 {/* <SignInRightt/> */}
 
 
                 <div className='signOption'>
                         <h1>Welcome Back!</h1>
                         <p>To keep connected with us <br/> login with your personal info</p>
 
                         <button><Link to="/signinform">Sign In</Link></button>
                </div>
 
                 
             </div>

            
             
 
         </div>
     
        
       
        

    </div>
  );
}

export default SignUpForm;
