
import React from "react";
;
import Admin from "./admin";
import useRol from '../scr/useRol';

const Dasboard = () => {
  const user = useRol()


  return (
    
  <>
      {user && <Admin user={user} />}
    </>
   

  )
}

export default Dasboard