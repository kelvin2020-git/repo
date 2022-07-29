import React,{useState} from 'react';

import {auth}from "../../firebase/firebase-config";
import styles from '../../../styles/Headerdasboard.module.css'
import { useRouter } from "next/router";
import useUser from '../../scr/useUser';
const Header = () => {

  const user = useUser()

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
          <h1 >Usuario : {user} </h1>  
        </div>
 
        <button className={styles.btnlogout} onClick={logout}> Cerrar Sesión</button>
      </div>
    </div>

  );
}

export default Header;