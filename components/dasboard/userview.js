
import React from "react";
import  {auth} from "../firebase/firebase-config";
import { useRouter } from "next/router";
import Vistausuario from "./userview/vistausuario";
import styles from '../../styles/Headerdasboard.module.css'
import useUser from '../scr/useUser';
function UserView() {
  const user = useUser()

  
  const { push } = useRouter();
  const logout = () => {
    auth.signOut();
    push("/");
    console.log("logout");
  };
  const home = () => {
    push("/")
  };
  return <>
     <div className={styles.cabecera}>
       <button className={styles.btnhome} onClick={home}> HOME</button>
      <div>
        <div className={styles.headertext}>
          <h1 >Usuario : {user} </h1>  
        </div>
 
        <button className={styles.btnlogout} onClick={logout}> Cerrar Sesión</button>
      </div>
    </div>

<Vistausuario/>
  
  </>
}

export default UserView;