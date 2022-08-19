 
import React ,{useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from "./Contexts/AuthContext";
import { useNavigate} from "react-router-dom";

const Dashboard = () => {
  
  const[error, setError] = useState("");
  const{ logOut} = useAuth();
  const navigate = useNavigate();
  const {currentUser} = useAuth();
  const [emailsetter, setEmailsetter] = useState(true);



   const handleLogOut = async (e)=>{
    e.preventDefault();
    setError('');
    setEmailsetter(false);

    try{
       await  logOut()
       navigate("/");
       console.log(currentUser.email)
    }catch{
      setError('Failed to logout')
    }
  }
  return (
    <div className='dashboard'>
        <div className='right2'>
          <h2>Druppella</h2>
        <button onClick={handleLogOut} style={{color:"white"}}>Log Out</button>

        </div>
        
        
         <div className='signUpcontainer signInContainer'>
          
 
 
 
 
             <div className= "right">
                 {/* <SignInRightt/> */}
 
 
                 <div className='signOption'>
                         <h1>Welcome Back!</h1>
                         {error && <div className='alert danger'>{error}</div> }
                         
                         {emailsetter && <div> <strong>Email  </strong>{currentUser.email}</div> }
{/*                          
                         <Link to="/update-profile" className='btn btn-success w-100'>update Profile</Link> */}
 
                         <button onClick={handleLogOut}>Log Out</button>
                </div>
 
                 
             </div>

             <div className="left">

              <div className='smallscreen'>
                {emailsetter && <div> <strong>Email  </strong>{currentUser.email}</div> }

              </div>

             <p>You are logged in</p>
             <Link to="/update-profile" className='btn btn-success'>update Profile</Link>
                
 
                
 
             </div>
             
 
         </div>
     
        
       
        

    </div>
  );
}

export default Dashboard;
