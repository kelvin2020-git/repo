import React from "react";
import Sidebar from "../../../components/dasboard/adminview/sidebar";
import Roles from '../../../components/dasboard/adminview/usuario/App';

function  Index() {
    return (
        <>
   
<Sidebar />
<section className="app-contenedor">
<div className="container">     
  <Roles/>
  </div>
</section>     
        </>

    );
  }
  
  export default Index;