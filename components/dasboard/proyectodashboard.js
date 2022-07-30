
import React, { useState } from "react";


import useRol from '../scr/useRol';
import Adminproyecto from "./adminproyecto";

const Proyectodashboard = () => {
  const user = useRol()


  return (
    
  <>
      {user && <Adminproyecto user={user} />}
    </>
   

  )
}

export default Proyectodashboard