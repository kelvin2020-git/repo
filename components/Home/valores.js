import React from "react";
import Image from 'next/image';
import mypic from '../../public/mision.png'
import mypic2 from '../../public/vision2.png'
import styles from '../../styles/Valores.module.css'
export default function Valores() {
  return (
    <>
      <section className={styles.servicios}  id="valores">
     
        
        <p className={styles.serviciosp}></p>
        <div className={styles.grid}>
          <article>
          <div className={styles.imagen}>
          <Image
              src={mypic}
              style={{ backgroundColor: '#61BCEA', marginLeft: '10px',borderRadius:'50px',}}
              alt="Picture of the author"
          
              width="100px"
              height="100px" 
            />

            </div>
            <div className={styles.text}>
              <h3>Misión</h3>
              <p>Satisfacer las necesidades de nuestros clientes, cumpliendo sus requisitos en calidad, costos y tiempo, manteniendo un sistema de gestión de calidad basado en la mejora continua; ofreciendo oportunidades para el desarrollo de sus empleados, y creando relaciones estratégicas con sus proveedores, creando así valores para nuestros socios y la familia.</p>
            </div>
          </article>
          <article>
          <div className={styles.imagen}>
          <Image
              src={mypic2}
              style={{  marginLeft: '10px',borderRadius:'50px'}}
              alt="Picture of the author"
          
              width="100px"
              height="100px" 
            />

            </div>
       
            <div className={styles.text}>
              <h3>Visión</h3>
              <p>Ser una empresa líder en el sector construcción y de igual forma ser reconocida por su excelente record de ejecución de obras y capacidad de satisfacer las necesidades de sus clientes.
</p>

            </div>
          </article>
          <aside>
          <div className={styles.text}>
              <h2>Valores</h2>
  

              <p>&#x2714;&#xfe0f;  Temor a Dios. </p>

              <p>&#x2714;&#xfe0f;   Honestidad. </p>

              <p> &#x2714;&#xfe0f; Respeto. </p>
              <p>&#x2714;&#xfe0f;  Responsabilidad. </p>

              <p>&#x2714;&#xfe0f; Determinación. </p>

              <p>&#x2714;&#xfe0f; Compromiso. </p>

              <p>&#x2714;&#xfe0f; Eficiencia. </p>

              <p>&#x2714;&#xfe0f; Eficacia. </p>

              <p> &#x2714;&#xfe0f;Mantenimiento de sistema de Gestión de Calidad. </p>

              <p> &#x2714;&#xfe0f;Apoyo continuo a sus empleados. </p>

              <p> &#x2714;&#xfe0f;Mantenimiento de una visión empresarial entre los miembros de la familia </p>
             

            </div>
          </aside>

        </div>
      </section>
   
    </>

  )
}