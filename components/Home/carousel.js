import React, { useEffect, useState } from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import Image from 'next/image';
import styles from '../../styles/Caruosel.module.css'
import { db} from "../firebase/firebase-config";
import {  getDocs, collection } from 'firebase/firestore'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];
export default function Caruseles() {
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
  return (
    <div className={styles.contenedor}>
      <div className={styles.controlswrapper}>
      </div>
      <hr className="seperator" />
      <div className={styles.carouselwrapper}>
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2500}>
          {lista.map(post => (<div key={post.id}><div>
            <Item key={post}><Image src={post?.foto} width="500px" height="600px" alt={post?.nombre} /></Item>
          </div>

          </div>
          ))}
        </Carousel>
      </div>
    </div>
  );

}







