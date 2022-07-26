import React from "react";
import Image from 'next/image';
import logo from '../../public/logo.webp'
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { authh, firebaseApp} from "../../components/firebase/firebase-config";
import styles from '../../styles/Register.module.css'
import {
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { getFirestore, doc, setDoc, } from "firebase/firestore";
export default function Formregister() {
  const firestore = getFirestore(firebaseApp);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { push } = useRouter();
  const registerUser = async (email, password, name, rol) => {
    const infoUsuario = await createUserWithEmailAndPassword(
      authh,
      email,
      password,
      name, rol
    ).then(({ user }) => {
      updateProfile(user, { displayName: name });
      console.log(user)
      const docuRef = doc(firestore, `usuarios/${user.uid}`);
      setDoc(docuRef, { nombre: name, correo: email, rol: rol, fecha: Date.now() });
      push("/Login");
    }).then((usuarioFirebase) => {
      return usuarioFirebase;
    }).catch((e) => {
      console.log(e);
      if (e.code === 'auth/email-already-in-use') {
        Swal.fire("Error", "El usuario ya existe", "error");
      }

    });

  };
  function submitHandler(data, e) {
    e.preventDefault();
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const rol = "usuario";
    registerUser(email, password, name, rol);
  }
  const regresar = () => {
    push("/Login");

  };
  return (
    <>
      <div className={styles.registercontainer}>
        <div className={styles.registerinfocontainer}>
          <Image
            className="logo"
            src={logo}
            alt="logo"
            width="120px"
            height="120px"
          />
          <p> Registrar usuario</p>
          <form className={styles.inputscontainer} onSubmit={handleSubmit(submitHandler)}>
            <div>
              <label className={styles.label}>Nombre usuario</label>
              <input className={styles.input} type="text" placeholder="Ingrese su nombre" id="name" name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 6,
                    message: "el nombre debe tener al menos 6 caracteres"
                  }
                })} />
            </div>
            {errors.name && <span className={errors.name && "mensajeError"}>{errors.name.message}</span>}

            <div>
              <label className={styles.label}>Correo</label>
              <input className={styles.input} type="email" placeholder="ejemplo@gmail.com" id="email" name="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Necesitas este campo"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto"
                  }
                })} />
            </div>
            {errors.email && <span className={errors.email && "mensajeError"}>{errors.email.message}</span>}
            <div>
              <label className={styles.label}>Contraseña</label>
              <input className={styles.input} type="text" placeholder="Ingrese su contraseña" id="password" name="password"

                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres"
                  }
                })} />
            </div>
            {errors.password && <span className={errors.password && "mensajeError"}>{errors.password.message}</span>}
            <button className={styles.btn} type="submit">Registrarse</button>
            <p onClick={regresar}>Regresar a Login</p>
          </form>
        </div>
      </div>
    </>

  )
}