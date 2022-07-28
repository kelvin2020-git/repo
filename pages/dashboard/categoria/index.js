import React from "react";
import Sidebar from "../../../components/dasboard/adminview/sidebar";
import Categoriaa from '../../../components/dasboard/adminview/categoria/App';

import  {auth} from "../../../components/firebase/firebase-config";
import styles from '../../../styles/Headerdasboard.module.css'
import { useRouter } from "next/router";

import { withProtectede } from "../../../components/scr/AuthStateChanged";
import Header from "../../../components/dasboard/adminview/header";
function Index() {

  return (
    <>
<Header/>
<Sidebar/>
    </>
  );
}

export default withProtectede(Index);