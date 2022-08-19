import React from 'react';
import SignInCard from './SignInCard';
import {AuthProvider} from "./Contexts/AuthContext"

const Overall = () => {
  return (
    <AuthProvider>
    <div>
        <SignInCard/>
    </div>



</AuthProvider>
  );
}

export default Overall;
