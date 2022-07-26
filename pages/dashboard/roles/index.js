import React from "react";
import Sidebar from "../../../components/dasboard/adminview/sidebar";
import Roles from '../../../components/dasboard/adminview/usuario/App';
import { getAuth } from "firebase/auth";
import app from "../../../components/firebase/firebase-config";
import styles from '../../../styles/Headerdasboard.module.css'
import { useRouter } from "next/router";
import { withProtectede } from "../../../components/scr/AuthStateChanged";
const auth = getAuth(app);
function Index() {

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
          <Roles />
        </div>
      </section>
    </>

  );
}
export default withProtectede(Index);





