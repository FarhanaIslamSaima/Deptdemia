import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
export const UserContext=createContext(null);

const AccountContext = ({children}) => {
    const [user,setUser]=useState([])
    return (
        <UserContext.Provider value={{
            user,setUser
        }}>
            {children}

        </UserContext.Provider>
    );
};

export default AccountContext;