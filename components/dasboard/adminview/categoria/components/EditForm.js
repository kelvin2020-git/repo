import { Form, Button } from "react-bootstrap"
import {db} from "../../../../firebase/firebase-config";

import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc, updateDoc,getDocs, collection, addDo } from "firebase/firestore";

import { useForm } from "react-hook-form";
const EditForm = ({ thecategoria, onClose }) => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const id = thecategoria.id;
  const [nombre, setNombre] = useState(thecategoria.nombre);
  const onSubmit = async (data) => {
    updateDoc(doc(db, "categoria", id), {
      ...data, modificacion: Date.now()
    }

    )
    onClose()
  };
  return (

    <Form onSubmit={handleSubmit(onSubmit)}>


      <Form.Group>
        <label className="text-input-formulario"><span>Nombre </span></label>
        <Form.Control
          type="text"
          placeholder="Categoria*"
          name="nombre"
          {...register("nombre", {required: {
            value: true,
            message: "El campo es requerido"
          },
          minLength: {
            value: 4,
            message: "el nombre debe tener al menos 4 caracteres"
          }})}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
         
        />


{errors.nombre && <span className={errors.nombre && "mensajeError"}>{errors.nombre.message}</span>}
      </Form.Group>

      <div className="btnmodal">
        <div className="btnleft">
          <Button variant="success" type="submit" block>
            <span>Agregar</span>

          </Button>

        </div>
        <div className="btnright">
          <Button variant="danger" onClick={onClose}>
            <span>Cerrar</span>
          </Button>

        </div>
      </div>
    </Form>

  )
}

export default EditForm;