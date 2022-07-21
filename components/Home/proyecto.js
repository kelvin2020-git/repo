import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { db, getDocs, collection } from "../firebase/firebase-config";
import styles from '../../styles/Proyecto.module.css'
export default function Proyectos() {
  const [postNum, setPostNum] = useState(2);
  const [lista, getlista] = useState([]);
  useEffect(() => {
    const setlista = async () => {
      try {
        const placesSnap = await getDocs(
          collection(db, `proyectoss`)
        );
        const places = [];
        placesSnap.forEach((doc) => {
          places.push({ ...doc.data(), id: doc.id, });
        });
       
        getlista(places)
      } catch (error) {
        console.log(error);
      }
    };
    setlista()
  }, []);
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 2)
  }

  return (
    <>
      <section id="proyecto" className={styles.proyectocontenedor}>
        <h3 className={styles.proyectotitulo}>PROYECTOS</h3>
        <div className={styles.barraseparador}></div>
        <div className={styles.card}>

          {lista.slice(0, postNum).map(post => (
            <div key={post.id} className={styles.cardimagen} >

              <div className={styles.imagen}>

                <Image
                  alt={post?.categoria}
                  src={post?.foto}
                  width="600px"
                  height="640px"
                />
              </div>
              <div className={styles.text}>{post.nombre} </div>
            </div>
          ))}
          <div className={styles.boton}><button onClick={handleClick} className={styles.btnloadmore} >Show More</button></div>

        </div>
      </section>
      <div className={styles.separador}></div>
    </>

  )
}



