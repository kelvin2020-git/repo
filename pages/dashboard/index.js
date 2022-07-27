import React from 'react'


import {auth}from "../../components/firebase/firebase-config";

import { useRouter } from "next/router";
import Header from '../../components/dasboard/adminview/header';
import Sidebar from '../../components/dasboard/adminview/sidebar';





function Index() {
 


    return (
  <>
< Header/>
<Sidebar/>
  </>
    );
  }
  
  export default Index;