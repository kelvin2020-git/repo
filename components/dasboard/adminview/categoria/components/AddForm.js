import { Form, Button } from "react-bootstrap"
import {db}from "../../../../firebase/firebase-config";
import {collection,addDoc } from 'firebase/firestore';
import {useForm} from "react-hook-form";
const AddForm = ({onClose}) =>{

    const { register, handleSubmit,formState: { errors }} = useForm();
    const onSubmit=(data,e) => {
        e.preventDefault();
    const docRef = collection(db , 'categoria')
    addDoc(docRef, {
            ...data,
            fecha: Date.now()
          }).then(()=> {
            onClose()
        })
       
      };


     return (

        <Form onSubmit={handleSubmit(onSubmit)}>
           <Form.Group>
            <label className="text-input-formulario"><span>Nombre </span></label>
                <Form.Control
                    type="text"
                    placeholder="Categoría*"
                    {...register("nombre", {required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    minLength: {
                      value: 4,
                      message: "el nombre debe tener al menos 4 caracteres"
                    }})}
                    required
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

export default AddForm;
				


									
			
			
			






