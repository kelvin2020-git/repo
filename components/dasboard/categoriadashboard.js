
import React from "react";


import useRol from '../scr/useRol';
import Admincategoria from "./admincategoria";


const Categoriadashboard = () => {
  const user = useRol()


  return (
    
  <>
      {user && <Admincategoria user={user} />}
    </>
   

  )
}

export default Categoriadashboard