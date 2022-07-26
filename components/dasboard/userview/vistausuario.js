
import React from "react";
import logo from '../../../public/user1.jpg'
import Image from 'next/image';

function Vistausuario() {
    return <section className="contenedorusuario">
        <div className="container">
            <Image
                src={logo}
                alt="logo"
                width="220px"
                height="220px" />
            <span className="textpanel">Hola, bienvenido a la vista usuario</span>
        </div>
    </section>
}

export default Vistausuario;