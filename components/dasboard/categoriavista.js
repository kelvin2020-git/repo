import React from 'react';
import Sidebar from "./adminview/sidebar";
import Header from "./adminview/header";
import App from './adminview/categoria/App';
import Menu from './adminview/menu';
const Categoriavista = () => {
  

  return (

    <>
      	<div className="capa2"></div>
    <Sidebar/>
      <section className="app-contenedor">
              <div className="container">
                <App />
              </div>
            </section>
    </>
  );
}

export default Categoriavista;