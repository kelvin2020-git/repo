import React from 'react'


import {auth}from "../../components/firebase/firebase-config";

import { useRouter } from "next/router";
import Header from '../../components/dasboard/adminview/header';
import Sidebar from '../../components/dasboard/adminview/sidebar';
import AdminView from '../../components/dasboard/adminview';
import Dasboard from '../../components/dasboard/dasboard';





function Index() {


    return (
  <>

<Dasboard/>
  </>
    );
  }
  
  export default Index;