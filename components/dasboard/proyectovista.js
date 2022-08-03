import React from 'react';
import Sidebar from "./adminview/sidebar";
import Header from "./adminview/header";
import App from './adminview/proyecto/App';
import Menu from './adminview/menu';
const Proyectovista = () => {
  

  return (

    <>	<div class="capa2"></div>
       <Menu/>
      <section className="app-contenedor">
              <div className="container">
                <App />
              </div>
            </section>
    </>
  );
}

export default Proyectovista;