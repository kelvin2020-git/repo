import React, { useState } from "react";
import Image from 'next/image';
import logo from '../../public/logo.webp'
import {db,auth} from "../firebase/firebase-config";
import styles from '../../styles/Navbar.module.css'
import {  onAuthStateChanged } from "firebase/auth";
import {  doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";



export default function Navbar() {
  const { push } = useRouter();
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
      };
      setUser(userData);

    });
  }
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } 
  })
  const logout = () => {
    push("/Login");

  };
  const Dasboard = () => {
    push("/dashboard");

  };
  return (

    <>
    
    <div className={styles.navbar}>
      <div >
        <a href="#inicio">
          <div className={styles.logo}>

          <Image 
            src={logo}
            alt="logo"
            width="120px"
            height="120px" />
          </div>
        
        </a>
      </div>
      <div>
        <nav>
         
        
            
            
           
         
         <div className={styles.navbardiv}>
         {user ? <li className={styles.navbartext}><a onClick={Dasboard}>DASHBOARD</a></li>:<a /> }
          <li className={styles.navbartext}><a href="#nosotros">NOSOTROS</a></li>
          <li className={styles.navbartext}><a href="#proyecto" >PROYECTOS</a></li>
          <li className={styles.navbartext}><a href="#contacto">CONTACTOS</a></li>
          {user ? <a /> : <li className={styles.navbartext}><a onClick={logout}>INICIO SESIÓN</a></li>}
         </div>
         <li className={styles.listaitemouter}>
            <a className={styles.listaenlace} href="#inicio">INICIO</a>
            <ul className={styles.listainner}>
            <li className={styles.listaiteminner}> <a href="#valores">VALORES</a></li>
              <li className={styles.listaiteminner}> <a href="#servicios">SERVICIOS</a></li>
            </ul>
          </li>

         
        </nav>
      </div>
    </div>


    
    </>

  );
}