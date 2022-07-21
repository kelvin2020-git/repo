import React, { useState } from "react";
import Image from 'next/image';
import logo from '../../public/logo.webp'
import app from "../firebase/firebase-config";
import styles from '../../styles/Navbar.module.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
const auth = getAuth(app);
const firestore = getFirestore(app);

export default function Navbar() {
  const [user, setUser] = useState(null);
  const { push } = useRouter();
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
    } else {
      setUser(null);
    }
  })
  const logout = () => {
    push("/Login");

  };

  return (
    <div className={styles.navbar}>
      <div >
        <a href="#inicio">
          <Image className={styles.logo}
            src={logo}
            alt="logo"
            width="120px"
            height="120px" />
        </a>
      </div>
      <div>
        <nav>
          <li className={styles.listaitemouter}>
            <a className={styles.listaenlace} href="#inicio">INICIO</a>
            <ul className={styles.listainner}>
              <li className={styles.listaiteminner}> <a href="#servicios">SERVICIOS</a></li>
            </ul>
          </li>
          <li className={styles.navbartext}><a href="#nosotros">NOSOTROS</a></li>
          <li className={styles.navbartext}><a href="#proyecto" >PROYECTOS</a></li>
          <li className={styles.navbartext}><a href="#contacto">CONTACTOS</a></li>
          {user ? <a /> : <li className={styles.navbartext}><a onClick={logout}>INICIO SESIÓN</a></li>}
        </nav>
      </div>
    </div>
  );
}