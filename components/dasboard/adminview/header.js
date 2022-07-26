import React from 'react';
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase-config";
import styles from '../../../styles/Headerdasboard.module.css'
import { useRouter } from "next/router";
const auth = getAuth(app);
const Header = ({ user }) => {
  const { push } = useRouter();
  const logout = () => {
    auth.signOut();
    push("/")

  };
  const home = () => {
    push("/")
  };
  return (
    <div className={styles.cabecera}>
       <button className={styles.btnhome} onClick={home}> HOME</button>
      <div>
        <div className={styles.headertext}>
          <h1 >Usuario : {user.name} </h1>  
        </div>
 
        <button className={styles.btnlogout} onClick={logout}> Cerrar Sesión</button>
      </div>
    </div>

  );
}

export default Header;