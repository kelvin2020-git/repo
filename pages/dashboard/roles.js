import React from 'react'



import Header from '../../components/dasboard/adminview/header';
import Sidebar from '../../components/dasboard/adminview/sidebar';


import Roles from '../../components/dasboard/adminview/usuario/App';



function Roles() {
 


    return (
  <>
< Header/>
<Sidebar/>
<section className="app-contenedor">
        <div className="container">
          <Roles />
        </div>
      </section>
  </>
    );
  }
  
  export default Roles;