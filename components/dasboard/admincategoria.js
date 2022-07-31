import React from 'react'
import Categoriavista from './categoriavista';



import UserView from './userview';


function Admincategoria({user}) {

  return (
    <div>
 {user === "admin" ? <Categoriavista /> : <UserView  />}
    </div>
  );
}

export default Admincategoria;