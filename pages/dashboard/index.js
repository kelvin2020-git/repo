import React from 'react'


import {auth}from "../../components/firebase/firebase-config";

import { useRouter } from "next/router";





function Index() {


  const { push } = useRouter();
  const logout = () => {
    auth.signOut();
    push("/")

  };
    return (
  <>
         <button  onClick={logout}> Cerrar Sesión</button>
  <div>hola</div>
  </>
    );
  }
  
  export default Index;