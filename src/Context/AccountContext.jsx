import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
export const UserContext=createContext(null);

const AccountContext = ({children}) => {
    const [User,setUser]=useState(null)
    console.log(User);
    return (
        <UserContext.Provider value={{
            User,setUser
        }}>
            {children}

        </UserContext.Provider>
    );
};

export default AccountContext;