import React, {useState, useRef} from 'react';
import { useAuth } from "./Contexts/AuthContext";
import { Link,useNavigate} from "react-router-dom";
import { updateCurrentUser } from 'firebase/auth';

const UpdateProfile = () => {
    const [error, setError] = useState("");
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentEmail, upEmail, upPassword} = useAuth();

    const handleSubmit = function (e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value ){
            return setError("password do not match");
        
        
        }


        const promises = [];
        if(emailRef.current.value !== updateCurrentUser.email){
            promises.push(upEmail(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(upPassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            navigate("/dashboard");
        }).catch(()=>{
            setError("failed to update account")
        }).finally(()=>{
            setLoading(false)
        })


        


        
    }
  return (
    <div className='updateprofile'>
        <div className='right2'>
        <h2>Drupella</h2>
        <button><Link to="/dashboard">Dashboard</Link></button>

        </div>
        <div className='signUpcontainer signInContainer'>
          
 
 
 
 
          <div className= "right runRight">
              {/* <SignInRightt/> */}


              <div className='signOption'>
                      <h1>Hey!</h1>
                      <p>You want to go back?</p>

                      <button><Link to="/dashboard">Dashboard</Link></button>
             </div>

              
          </div>

          <div className={"left runLeft"}>
             

             <div className='sign'>
                     <h1>Update Profile</h1>
                     {error && <div>{error}</div> }
             
                     
                     
             
                     <form onSubmit={handleSubmit}>

                        

                         <div className='form-input'>
                                 <i className='icofont-envelope'></i>
                                 <input type="email" placeholder='email'  required defaultValue={currentEmail} ref={emailRef}/>
                         </div>
             
                         <div className='form-input'>
                                 <i className='icofont-lock'></i>
                                 <input type="password" ref={passwordRef} placeholder='Leave blank to keep same password'/>
                         </div>
                         <div className='form-input'>
                                 <i className='icofont-lock'></i>
                                 <input type="password" placeholder='Leave blank to keep  same password' ref={passwordConfirmRef} />
                         </div>

                         <button disabled={loading} className='btns' type='submit'>Update </button>
                         
             
                     </form>
             
                     
             
                     
       
                </div>

         </div>
          

      </div>
  
     
    
     
      

      
    </div>
  );
}

export default UpdateProfile;
