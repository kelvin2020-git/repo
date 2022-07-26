import React from "react";
import App from '../../components/dasboard/adminview/proyecto/App';
import Sidebar from "../../components/dasboard/adminview/sidebar";
import firebaseApp from "../../components/firebase/firebase-config";
import styles from '../../styles/Headerdasboard.module.css'
import { useRouter } from "next/router";
import { withProtectede } from "../../components/scr/AuthStateChanged";
import { getAuth } from "firebase/auth";
function Proyecto() {
  const auth = getAuth(firebaseApp);
  const { push } = useRouter();
  const logout = () => {
    auth.signOut();
    push("/")

  };
  const home = () => {
    push("/")
  };

  return (
    <>


      <div className={styles.cabecera2}>
        <button className={styles.btnhome} onClick={home}> HOME</button>
        <div>
          <div className={styles.headertext}>

          </div>
          <button className={styles.btnlogout} onClick={logout}> Cerrar Sesión</button>
        </div>
      </div>
      <Sidebar />
      <section className="app-contenedor">
        <div className="container">
          <App />
        </div>
      </section>

    </>

  );
}

export default withProtectede(Proyecto);