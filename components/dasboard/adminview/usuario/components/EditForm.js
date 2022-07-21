import { Form, Button } from "react-bootstrap"
import {  db  }from "../../../../firebase/firebase-config";

import { useState} from 'react';
import { doc,updateDoc } from "firebase/firestore";

import { useForm } from "react-hook-form";
const EditForm = ({theusuario,onClose}) =>{
    const { register, handleSubmit, formState:{errors}} = useForm();
    const id = theusuario.id;
    const [nombre, setNombre] = useState(theusuario.nombre);
    const [correo, setCorreo] = useState(theusuario.correo);
    const [roles, setRol] = useState(theusuario.rol);
    
   const onSubmit = async (data) => {
    updateDoc(doc(db, "usuarios",id ), {
        ...data} 
       
      )
      onClose()
      };
  
     return (

        <Form onSubmit={handleSubmit(onSubmit)}>

            
            <Form.Group>
            <label className="text-input-formulario"><span>Nombre</span></label>
                <Form.Control
                    type="text"
                    placeholder="Nombre *"
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
                    onChange={(e)=> setNombre(e.target.value)}
                 
                />
                {errors.nombre && <span className={errors.nombre && "mensajeError"}>{errors.nombre.message}</span>}
            </Form.Group>
            <Form.Group>
            <label className="text-input-formulario"><span>Correo</span></label>
                <Form.Control
                    type="text"
                    placeholder="Descripcion"
                    name="descripcion"
                    value={correo}
                    {...register("correo", {
                        required: {
                          value: true,
                          message: "Necesitas este campo"
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "El formato no es correcto"
                        }
                      })}
                    onChange={(e)=> setCorreo(e.target.value)}
                  
                />
                {errors.correo && <span className={errors.correo && "mensajeError"}>{errors.correo.message}</span>}
            </Form.Group>
            <Form.Group>
            <label className="text-input-formulario"><span>Rol</span></label>
                <Form.Control
                    as="select"
                    name="categoria"
                    value={roles}
                    {...register("rol", { required: true }, { value: true })}
                    onChange={(e)=> setRol(e.target.value)}
                > <option>admin</option>
                <option>usuario</option>
            </Form.Control>
            {errors.rol && <span className={errors.rol && "mensajeError"}>{errors.rol.message}</span>}
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