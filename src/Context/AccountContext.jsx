import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged,getAuth } from 'firebase/auth';
export const UserContext=createContext(null);

const AccountContext = ({children}) => {
    const [User,setUser]=useState(null)
    const [login,setlogin]=useState(false);
   
useEffect(()=>{
  const auth=getAuth();
  auth.onAuthStateChanged(setUser);

},[])
    console.log(User);
    
      

      
    
       

    
      

      
     
   

    
    
    
    return (
        <UserContext.Provider value={{
            User,setUser,login,setlogin
        }}>
            {children}

        </UserContext.Provider>
    );
};

export default AccountContext;