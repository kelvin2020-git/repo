import React, { useState } from "react";
import MyComponent from "./mapa";
import styles from '../../styles/Contacto.module.css'
import { useForm } from "react-hook-form";
export default function Contactos() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState("Enviar");
  const submitHandler = async (data, e) => {
    e.preventDefault();
    setStatus("Enviando");

    let details = {
      name: data.name,
      email: data.email,
      message: data.message,
      apellido: data.apellido,
      telefono: data.telefono,
    };
    let response = await fetch("/api/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify(details),
    });
    setStatus(status);
    e.target.reset()
    let result = await response.json();
    alert(result.status);
  };



  return (
    <>

      <section id="contacto" className={styles.contactocontenedor}>
      
        <h3 className={styles.contactotitulo}>CONTACTO</h3> 
        <div className={styles.barraseparador}></div>
        <div className={styles.imagen}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.3167800246069!2d-80.19228017079179!3d25.761739106788706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ef8b1ca19e3e839!2zMjXCsDQ1JzQyLjMiTiA4MMKwMTEnMzAuMiJX!5e0!3m2!1ses-419!2shn!4v1659416514855!5m2!1ses-419!2shn" width="100%" height="100%"   loading="lazy" ></iframe>
         </div>
        <div className={styles.contactogrid}>
          <div className={styles.contactogridcontenedor}>
            <div className={styles.contactogridtitulo}>Preguntas</div>

            <div className={styles.contactogridcontenido}>Para cotizaciones  preguntas, comentarios e inquietudes; por favor llámanos: 914-135-288 o completa el formulario a continuación
            </div>

            <div className={styles.contactogridtitulocontenido}>Oficina Principal</div>
            <div className={styles.contactocontenido}>
              <div>Miami, Florida</div>
              <div>strongconcrete.info@gmail.com</div>
              <div>Teléfono: +1 (786) 531-5356</div>
            </div>
            <div className={styles.contactonumero}>
              <div>Recibe un presupuesto:</div>
              <div>+1 (786) 531-5356</div>

            </div>
            <div className={styles.barraseparadorinferior}></div>
          </div>
            <form className={styles.formulario} onSubmit={handleSubmit(submitHandler)}>
              <div className={styles.input}>
                <label htmlFor="name" id="labeltext">Nombre
                </label>
                <input type="text" id="name" {...register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 3,
                    message: "el nombre debe tener al menos 3 caracteres"
                  }
                })}></input>
                {errors.name && <span className={errors.name && "mensajError"}>{errors.name.message}</span>}
              </div>

              <div className={styles.input} >
                <label>Apellido</label>
                <input type="text" id="apellido" {...register("apellido", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 3,
                    message: "el nombre debe tener al menos 3 caracteres"
                  }
                })}></input>
                {errors.apellido && <span className={errors.apellido && "mensajError"}>{errors.apellido.message}</span>}
              </div>
              <div className={styles.input} >
                <label>Email*</label>
                <input type="email" id="email" {...register("email", {
                  required: {
                    value: true,
                    message: "Necesitas este campo"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto"
                  }
                })}  ></input>
                {errors.email && <span className={errors.email && "mensajError"}>{errors.email.message}</span>}
              </div>
              <div className={styles.input}>
                <label>Teléfono</label>
                <input type="text" id="telefono" {...register("telefono", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 6,
                    message: "el nombre debe tener al menos 6 caracteres"
                  }
                })}></input>
                {errors.telefono && <span className={errors.telefono && "mensajError"}>{errors.telefono.message}</span>}
              </div>
              <div>
                <label htmlFor="message" id="labeltext">Déjanos un mensaje ...</label>
                <textarea id="message" {...register("message", {}
                )} style={{ height: "100px", width: "220px" }} />
              </div>

              <button type="submit" className={styles.formulariobutton}>{status}</button>
            </form>
       

     
          </div>

  
      </section>
    </>

  )
}