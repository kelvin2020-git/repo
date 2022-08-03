import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.webp'

import {auth}from "../../firebase/firebase-config";
import { useRouter } from "next/router";
import useUser from '../../scr/useUser';
const Menu = () => {

  const user = useUser()
  const { push } = useRouter();
  
  const logout = () => {
    auth.signOut();
    push("/")

  };
  const home = () => {
    push("/")
  };

  const categoria = () => {
    push("/dashboard/categoria");

  };
  const usuario = () => {
    push("/dashboard/roles");
  };
  const dashboard = () => {
    push("/dashboard");
  };
  const proyecto = () => {
    push("/dashboard/proyectos");

  };
  return (

<>

<body>
	<header class="header">
		<div class="container">
		<div class="btn-menu">
			<label for="btn-menu">☰</label>
		</div>
			<div class="logo">
				<h1 onClick={home}>Home</h1>
			</div>
			<nav class="menu">
				<a >Usuario : {user} </a>
				
				<a onClick={logout}> Cerrar Sesión</a>
			</nav>
		</div>
	</header>
	<div class="capa"></div>

<input type="checkbox" id="btn-menu"></input>
<div class="container-menu">


	<div class="cont-menu">
    <div     className="sidebarlog">

    <Image
            onClick={dashboard}
            className="sidebarlogo"
            src={logo}
            alt="logo"
            width="120px"
            height="120px"
          />

</div>

		<nav>
        <li className="titulo"><a > Strong Concrete  </a></li>
        <ul>
        <li className="active"> <a className="active">Bienvenido</a></li>
		<li className="sidetext"><a onClick={usuario}>Usuario</a></li>
        <li className="sidetext"><a onClick={proyecto}>proyecto</a></li>
		<li className="sidetext">	<a onClick={categoria}>Categoria</a></li>
        <li className="sidetext"><a onClick={dashboard}>panel</a></li>
            </ul>
		</nav>
		<label for="btn-menu">✖️</label>
	</div>
</div>
</body>

</>


  );
}

export default Menu;