import {  useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import {  doc, getDoc } from "firebase/firestore";
import {auth,db} from "../../components/firebase/firebase-config";


export default function useRol() {

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
          rol: rol,
         
        };
        setUser(userData.rol);
  
      });
    }
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        if (!user) {
          setUserWithFirebaseAndRol(usuarioFirebase);
        }
      } 
    })
return user

}