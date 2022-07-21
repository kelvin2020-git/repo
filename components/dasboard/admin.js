import React from 'react'
import app from "../firebase/firebase-config";
import { getAuth } from "firebase/auth";
import AdminView from './adminview';
import UserView from './userview';
import { useRouter } from "next/router";
const auth = getAuth(app);



function Admin({ user }) {

  return (
      <div>
    
       
        {user.rol === "admin" ? <AdminView user={user}/> : <UserView user={user}/>}
      </div>
    );
  }
  
  export default Admin;