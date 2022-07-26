import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.webp'
import { useRouter } from "next/router";
import styles from '../../../styles/Sidebar.module.css'
const Sidebar = () => {
  const { push } = useRouter();
  const categoria = () => {
    push("/dashboard/categoria");

  };
  const usuario = () => {
    push("/dashboard/roles");
  };
  const dashboard = () => {
    push("/dashboard");
  };
  const proyecto = () => {
    push("/dashboard/proyectos");

  };
  return (
    <main className="main">
      <aside className={styles.sidebar}>
        <div className={styles.sidebarlogo}>

          <Image
            onClick={dashboard}
            className={styles.sidebarlog}
            src={logo}
            alt="logo"
            width="120px"
            height="120px"
          />

        </div>
        
        <li className={styles.titulo}><a > Strong Concrete  </a></li>
        <nav className={styles.nav}>
          <ul>

            <li className={styles.active}><a >Bienvenido</a></li>
            <li className={styles.sidetext}><a onClick={categoria} >Categoría</a></li>
            <li className={styles.sidetext}><a onClick={proyecto} >Proyecto</a></li>
            <li className={styles.sidetext}><a onClick={usuario} >Usuario</a></li>

          </ul>
        </nav>
      </aside>
    </main>

  );
}

export default Sidebar;