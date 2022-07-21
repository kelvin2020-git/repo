import React from 'react';
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase-config";
import styles from '../../../styles/Headerdasboard.module.css'
import { useRouter } from "next/router";
const auth = getAuth(app);
const Header = ({user}) => {



    const { push } = useRouter();
    const logout = () => {
      auth.signOut();
      push("/");
    
    };
    
    
    return ( 
<div className={styles.cabecera}>
    
      <div>
        <div className={styles.headertext}>
        <h1 >Usuario : {user.name}</h1>

        </div>
          
<button className={styles.btnlogout} onClick={logout}> Cerrar Sesión</button>
      </div>
    </div>
      
     );
}
 
export default Header;