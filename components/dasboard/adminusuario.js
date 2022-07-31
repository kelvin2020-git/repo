import React from 'react'



import Usuariovista from './uservista';
import UserView from './userview';


function Adminusuario({user}) {

  return (
    <div>
 {user === "admin" ? <Usuariovista /> : <UserView  />}
    </div>
  );
}

export default Adminusuario;