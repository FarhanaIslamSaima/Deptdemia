import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged,getAuth } from 'firebase/auth';
export const UserContext=createContext(null);

const AccountContext = ({children}) => {
    const [User,setUser]=useState(null)
    
       const auth=getAuth()
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log(user)
            setUser(auth.currentUser.providerData)
           
          } else {
            setUser(null);
            
          }
        });

      
    if(User!=null){
        console.log(User[0].displayName)

    }
      

      
     
   

    
    
    
    return (
        <UserContext.Provider value={{
            User,setUser
        }}>
            {children}

        </UserContext.Provider>
    );
};

export default AccountContext;