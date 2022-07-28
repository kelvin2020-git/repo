import React from "react";
import Header from "../../../components/dasboard/adminview/header";
import App from '../../../components/dasboard/adminview/proyecto/App';
import Sidebar from "../../../components/dasboard/adminview/sidebar";

import { withProtectede } from "../../../components/scr/AuthStateChanged";

function Index() {



  return (
    <>

< Header/>
<Sidebar/>

    </>

  );
}

export default withProtectede(Index);