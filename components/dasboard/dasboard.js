
import React, { useState } from "react";
import app from "../firebase/firebase-config";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Admin from "./admin";
const firestore = getFirestore(app);
const auth = getAuth(app);
const Dasboard = () => {
  const [user, setUser] = useState(null);
  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
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
      {user && <Admin user={user} />}
    </>

  )
}

export default Dasboard