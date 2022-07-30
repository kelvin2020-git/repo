import React from 'react'


import Proyectovista from './proyectovista';
import UserView from './userview';


function Adminproyecto({user}) {

  return (
    <div>
 {user === "admin" ? <Proyectovista /> : <UserView  />}
    </div>
  );
}

export default Adminproyecto;