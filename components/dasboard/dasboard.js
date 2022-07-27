
import React, { useState } from "react";
import {auth,db} from "../firebase/firebase-config";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import {  doc, getDoc } from "firebase/firestore";
import Admin from "./admin";


const Dasboard = () => {
  const [user, setUser] = useState(null);
  async function getRol(uid) {
    const docuRef = doc(db, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }
  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        name: usuarioFirebase.displayName,
        rol: rol,
      };
      setUser(userData);

    });
  }
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final
      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });


  return (
    <>
    <Admin />
    </>

  )
}

export default Dasboard