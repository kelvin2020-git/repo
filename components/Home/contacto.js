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
        <div><MyComponent /> </div>
        <div className={styles.contactogrid}>
          <div className={styles.contactogridcontenedor}>
            <div className={styles.contactogridtitulo}>Preguntas</div>

            <div className={styles.contactogridcontenido}>Para cotizaciones  preguntas, comentarios e inquietudes; por favor llámanos: 914-135-288 o completa el formulario a continuación
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
                {errors.name && <span className={errors.name && "mensajeError"}>{errors.name.message}</span>}
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
                {errors.apellido && <span className={errors.apellido && "mensajeError"}>{errors.apellido.message}</span>}
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
                {errors.email && <span className={errors.email && "mensajeError"}>{errors.email.message}</span>}
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
                {errors.telefono && <span className={errors.telefono && "mensajeError"}>{errors.telefono.message}</span>}
              </div>
              <div>
                <label htmlFor="message" id="labeltext">Déjanos un mensaje ...</label>
                <textarea id="message" {...register("message", {}
                )} style={{ height: "120px", width: "420px" }} />
              </div>

              <button type="submit" className={styles.formulariobutton}>{status}</button>
            </form>
          </div>
          <div className={styles.contactogridcontenedor}>

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

        </div>
      </section>
    </>

  )
}