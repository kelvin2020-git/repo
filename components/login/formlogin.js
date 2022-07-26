import Image from 'next/image';
import logo from '../../public/logo.webp'
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { firebaseApp } from "../../components/firebase/firebase-config";
import { authh } from "../../components/firebase/firebase-config";
import { getFirestore, doc, setDoc, } from "firebase/firestore";
import styles from '../../styles/Login.module.css'
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider
} from "firebase/auth";

export default function Formlogin() {
  const { push } = useRouter();
  const firestore = getFirestore(firebaseApp);
  const { register, handleSubmit, formState: { errors } } = useForm();

  function submitHandler(data, e) {
    e.preventDefault();
    signInWithEmailAndPassword(authh, data.email, data.password)
      .then((result) => {
        const user = result.user;
        
        push("/dashboard");
      })
      .catch((e) => {
        console.log(e);
        if (e.code === 'auth/wrong-password') {
          Swal.fire("Error", "El usuario y contraseña es incorrecta", "error");
        }
        if (e.code === 'auth/user-not-found') {
          Swal.fire("Error", "El usuario no existe", "error");
        }
      });
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(authh, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({ credential, token, user });
        const docuRef = doc(firestore, `usuarios/${user.uid}`);
        setDoc(docuRef, { nombre: user.displayName, correo: user.email, rol: "usuario", fecha: Date.now() });
        push("/dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };
  const registrarse = () => {
    push("/register");

  };
  const volver = () => {
    push("/");

  };

  return (
    <>
      <div className={styles.logincontainer}>
        <div className={styles.logininfocontainer}>
          <Image
            className="logo"
            src={logo}
            alt="logo"
            width="120px"
            height="120px"
          />
          <p> Bienvenido a Strong Concrete</p>
          <form className={styles.inputscontainer} onSubmit={handleSubmit(submitHandler)}>
            <div>
              <label className={styles.label}>Correo</label>
              <input className={styles.input} type="email" placeholder="Ingrese su correo" id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Necesitas este campo"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto"
                  }
                })}
              />
            </div>
            {errors.email && <span className={errors.email && "mensajeError"}>{errors.email.message}</span>}
            <div>
              <label className={styles.label}>Contraseña</label>
              <input className={styles.input} type="text" placeholder="Ingrese su contraseña" id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres"
                  }
                })}
              />
            </div>
            {errors.password && <span className={errors.password && "mensajeError"}>{errors.password.message}</span>}
            <p onClick={registrarse}>¿Registrarse? <span className={styles.span}>Crear cuenta</span></p>
            <button className={styles.btn} type="submit">Iniciar Sesión</button>
            <div ><span className={styles.span} onClick={handleGoogleLogin}>
              Iniciar con google</span>
            </div>


          </form>
          <span className={styles.regresar} onClick={volver}>Regresar</span>
        </div>

      </div>
    </>

  )
}