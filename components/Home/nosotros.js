import React from "react";
import Image from 'next/image';
import nosotros from '../../public/nosotros.webp'
import styles from '../../styles/Nosotros.module.css'
export default function Nosotro() {
  return (
    <>
      <section id="nosotros">
        <div className={styles.nosotroscard}>
          <div className={styles.contenedornosotros}>
            <div className={styles.nosotroscontenido}>
              <span >NOSOTROS</span>
              <div className={styles.nosotrosp}></div>
              <p>En Wix nos apasiona crear plantillas que te permiten construir geniales páginas web ¡y esto es gracias a los comentarios de usuarios como tú! Mantente informado sobre los nuevos lanzamientos y lo que viene en Nuevas Funciones en el Centro de Ayuda. Siéntete libre de darnos tu opinión en el foro de Wix. Si te gustaría obtener el toque de un diseñador profesional, ve al Wix Arena y contacta a uno de nuestros diseñadores. O si necesitas más ayuda puedes escribir tus preguntas en los foros del Centro de Ayuda y obtener respuestas instantáneas. Para mantenerte actualizado con todo en Wix, incluyendo consejos y cosas que creemos que son geniales, ¡ve al Wix Blog!</p>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={nosotros}
              alt={nosotros}
              width="623px"
              height="700px"
            />
          </div>
        </div>
      </section>
    </>

  )
}