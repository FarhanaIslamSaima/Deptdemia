import React, { useState } from 'react';
import Newsfeed from '../../NewsFeed/Newsfeed';
import { getAuth, onAuthStateChanged } from '@firebase/auth';


const RightSidebar = () => {
    const auth = getAuth();
    const [name, setName] = useState('') 
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setName(user.name);
        }else{
            console.log("no user")
        }
    })

    
    return (
        <>
       <p>{name}</p>
        <Newsfeed/>        
        </>
    );
};

export default RightSidebar;