import React from 'react';
import Sidebar from "./adminview/sidebar";
import Header from "./adminview/header";
import App from './adminview/proyecto/App';
const Proyectovista = () => {
  

  return (

    <>
      <Header  />
      <Sidebar  />
      <section className="app-contenedor">
              <div className="container">
                <App />
              </div>
            </section>
    </>
  );
}

export default Proyectovista;