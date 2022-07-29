import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import {  doc, getDoc } from "firebase/firestore";
import {auth,db} from "../../components/firebase/firebase-config";


export default function useUser() {

    const [user, setUser] = useState(null);
    const router = useRouter();
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
          name:usuarioFirebase.displayName,
        };
        setUser(userData.name);
  
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




export function withProtectede(Component) {
	return function WithProtectede () {

	const router = useRouter();
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (!user) {
                router.replace("/Login");
                return <h1>Loading...</h1>;
            }
        })

           
            return <Component   />;
          }
		
		
	};
