import React from "react";
import Caruseles from './carousel';
import styles from '../../styles/Inicio.module.css'
export default function Inicio() {
  return (
    <>
      <section className={styles.inicio} id="inicio">
        <span>STRONG CONCRETE</span>  <span>LÍDERES EN CALIDAD DE ACABADOS DECORATIVOS EN CONCRETO</span>
        <Caruseles />
      </section>
    </>

  )
}