
import React, { useState } from "react";
import {auth,db} from "../firebase/firebase-config";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import {  doc, getDoc } from "firebase/firestore";
import Admin from "./admin";
import useRol from '../scr/useRol';

const Dasboard = () => {
  const user = useRol()


  return (
    
  <>
      {user && <Admin user={user} />}
    </>
   

  )
}

export default Dasboard