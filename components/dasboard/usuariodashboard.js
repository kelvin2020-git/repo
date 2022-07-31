
import React from "react";
import useRol from '../scr/useRol';
import Adminusuario from "./adminusuario";

const Usuariodashboard = () => {
  const user = useRol()


  return (
    
  <>
      {user && <Adminusuario user={user} />}
    </>
   

  )
}

export default Usuariodashboard