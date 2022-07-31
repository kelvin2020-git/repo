
import React from 'react'
import { useRouter } from 'next/router';
import { useContext } from 'react'
import AuthContext from '../../store/auth.context'
import Categoriadashboard from '../../components/dasboard/categoriadashboard';


function  Categoria() {
    const {user, loading} = useContext(AuthContext);
    const {push} = useRouter();
    
 if (!user && !loading) {

  push("/Login");
  return <h1>Loading...</h1>;
     
    }else {
      return (
      <Categoriadashboard/>
          );
    }
}

export default  Categoria