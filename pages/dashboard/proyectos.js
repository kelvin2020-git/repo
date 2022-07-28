import React from 'react'


import Header from '../../components/dasboard/adminview/header';
import Sidebar from '../../components/dasboard/adminview/sidebar';
import App from '../../components/dasboard/adminview/proyecto/App';





function Proyectos() {
 


    return (
  <>
< Header/>
<Sidebar/>
<section className="app-contenedor">
        <div className="container">
          <App />
        </div>
      </section>
  </>
    );
  }
  
  export default Proyectos;