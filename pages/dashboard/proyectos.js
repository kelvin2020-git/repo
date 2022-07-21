import React, { useState } from "react";
import App from '../../components/dasboard/adminview/proyecto/App';
import Sidebar from "../../components/dasboard/adminview/sidebar";
import Header from "../../components/dasboard/adminview/header";
import app from "../../components/firebase/firebase-config";
import { onAuthStateChanged,getAuth} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(app);
const auth = getAuth(app);
function Proyecto() {
   
   
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
    <Sidebar />
    <section className="app-contenedor">
  <div className="container">      
  <App/> 
  </div>
</section>
           
        </>

    );
  }
  
  export default Proyecto;