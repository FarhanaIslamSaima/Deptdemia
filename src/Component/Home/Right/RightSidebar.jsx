import { getAuth } from 'firebase/auth';
import React from 'react';
import Newsfeed from '../../NewsFeed/Newsfeed';


const RightSidebar = () => {
    let auth = getAuth();
    
    return (
<<<<<<< HEAD
        <div>
        </div>
=======
        <>
        <Newsfeed/>
        
        </>
>>>>>>> refs/remotes/origin/master
    );
};

export default RightSidebar;