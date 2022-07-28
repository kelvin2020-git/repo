import React from 'react'



import Header from '../../components/dasboard/adminview/header';
import Sidebar from '../../components/dasboard/adminview/sidebar';

import Categoriaa from '../../components/dasboard/adminview/categoria/App';




function Categoria() {
 


    return (
  <>
< Header/>
<Sidebar/>
<section className="app-contenedor">
        <div className="container">
          <Categoriaa />
        </div>
      </section>
  </>
    );
  }
  
  export default Categoria;