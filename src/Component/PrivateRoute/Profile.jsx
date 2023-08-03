import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { useEffect } from "react";
import { getAuth } from '@firebase/auth';

export default function Profile() {

    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      });
    const { name, email } = formData;
    function onLogout() {
        auth.signOut();
        navigate("/");
    }
    return (
        <div>
            <input type="text" disabled value={email} /><br/>
            <input type="text"  disabled value={name} />
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}