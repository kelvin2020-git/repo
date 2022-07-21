import React from "react";
import Sidebar from "../../components/dasboard/adminview/sidebar";
import Categoriaa from '../../components/dasboard/adminview/categoria/App';
function Categorias() { 
    return (
    <>
    <Sidebar />
    <section className="app-contenedor">
  <div className="container">  

 
  <Categoriaa/>  
    
  
</div>
</section>
           
        </>

    );
  }
  
  export default Categorias;