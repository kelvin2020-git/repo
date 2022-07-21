


import Contactos from '../components/Home/contacto';
import Footer from '../components/Home/footer';
import Inicio from '../components/Home/inicio';
import Navbar from '../components/Home/Navbar';
import Nosotro from '../components/Home/nosotros';
import Proyectos from '../components/Home/proyecto';
import Servicios from '../components/Home/servicios';
import Head from "next/head";


export default function Home() {

 
  return (
    <>
         <Head>
      <title>INICIO</title>
      <meta name="description" content="Lideres en acabados!" />
  <meta property="og:title" content="About - STRONG CONCRETE" />
  <meta property="og:description" content="Lideres en acabados!" />
  <meta property="og:url" content="https://myclothingstore.com/about" />
  <meta property="og:type" content="website" />
  {/* <link rel="icon" href="/favicon.ico" /> */}
  

      </Head>
      <Navbar/> 
      
      <section>

     
<Inicio/>
<Servicios/>
<Nosotro/>
<Proyectos/>
<Contactos/>
<Footer/>
   
      </section>
    </>
  );
}