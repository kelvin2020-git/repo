import React from "react";
import Image from 'next/image';
import mypic from '../../public/22.webp'
import styles from '../../styles/Servicios.module.css'


export default function Servicios() {

  return (
    <>

      <section className={styles.servicios} id="servicios">
        <div>
        <p className={styles.titulo}>SERVICIOS</p>
        </div>
       
        <p className={styles.serviciosp}></p>
        <div className={styles.grid}>
          <article>
          <div className={styles.imagen}>
            <Image
              src={mypic}
              style={{ marginTop:'10px'}}
              alt="Picture of the author"
              width="250px"
              height="225px"
            />
  </div>
            <div className={styles.text}>
              <h3>Planeamiento</h3>
              <p>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti</p>
            </div>
          </article>
          <article>
          <div className={styles.imagen}>
            <Image
              src={mypic}
              style={{ marginTop:'10px'}}
              alt="Picture of the author"
              width="250px"
              height="225px"
            />
              </div>
            <div className={styles.text}>
              <h3>Maquetas</h3>
              <p>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti</p>

            </div>
          </article>
          <article>
          <div className={styles.imagen}>
            <Image
              src={mypic}
              style={{ marginTop:'10px'}}
              alt="Picture of the author"
              width="250px"
              height="225px"
            />
              </div>
            <div className={styles.text}>
              <h3>Construcción</h3>
              <p>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti</p>

            </div>
          </article>

        </div>
      </section>
    </>

  )
}