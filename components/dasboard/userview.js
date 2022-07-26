
import React from "react";
import  {firebaseApp} from "../firebase/firebase-config";
import { useRouter } from "next/router";
import Vistausuario from "./userview/vistausuario";
import { getAuth } from "firebase/auth";
function UserView({user}) {

  const auth = getAuth(firebaseApp);

  
  const { push } = useRouter();
  const logout = () => {
    auth.signOut();
    push("/");
    console.log("logout");
  };
  return <>
  
  <div className="cabecera">
    
  <div>
    <div className="header-text">
    <h1 >Usuario : {user.name}</h1>

    </div>
      
<button className="btn-logout" onClick={logout}> Cerrar Sesion</button>
  </div>
</div>

<Vistausuario/>
  
  </>
}

export default UserView;