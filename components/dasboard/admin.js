import React from 'react'

import AdminView from './adminview';
import UserView from './userview';


function Admin({ user }) {
  return (
    <div>
      {user.rol === "admin" ? <AdminView user={user} /> : <UserView user={user} />}
    </div>
  );
}

export default Admin;