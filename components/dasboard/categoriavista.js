import React from 'react';
import Sidebar from "./adminview/sidebar";
import Header from "./adminview/header";
import App from './adminview/categoria/App';
const Categoriavista = () => {
  

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

export default Categoriavista;