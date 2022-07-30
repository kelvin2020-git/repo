import React from 'react'


import Header from '../../components/dasboard/adminview/header';
import Sidebar from '../../components/dasboard/adminview/sidebar';
import App from '../../components/dasboard/adminview/proyecto/App';







  









  import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'
import AuthContext from '../../store/auth.context'
import Proyectodashboard from '../../components/dasboard/proyectodashboard';


function Proyectos() {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();
    
 if (!user && !loading) {

      return <h1>no tienes acceso</h1>; 
     
    }else {
      return (
      <Proyectodashboard/>
          );
    }
}

export default Proyectos