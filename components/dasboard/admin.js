import React from 'react'

import AdminView from './adminview';
import UserView from './userview';


function Admin({user}) {

  return (
    <div>
 {user === "admin" ? <AdminView  /> : <UserView  />}
    </div>
  );
}

export default Admin;