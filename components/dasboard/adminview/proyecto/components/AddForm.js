import React, { useEffect } from 'react';
import { Form, Button } from "react-bootstrap"
import { db, addDoc } from "../../../../firebase/firebase-config";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Image from "next/image";
import { onSnapshot, collection } from 'firebase/firestore';
const AddForm = ({ onClose }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const docRef = collection(db, 'categoria')

    onSnapshot(docRef, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id, })
      })
      setCategory(data)

    })

  }, [])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [filee, setFile] = useState("https://res.cloudinary.com/diicfgh32/image/upload/v1658366812/iahc3l0jmjvlqbj9w3jk.jpg")
  const imageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      startUploading(file);
    }

  };

  const startUploading = async (file) => {
    const cloudUrl = "https://api.cloudinary.com/v1_1/diicfgh32/upload";
    const formData = new FormData();
    formData.append("upload_preset", "Reactjs");
    formData.append("file", file);
    try {
      const resp = await fetch(cloudUrl, {
        method: "POST",
        body: formData,
      });
      if (resp.ok) {
        const cloudResp = await resp.json();
        setFile(cloudResp.secure_url)
        return cloudResp.secure_url;
      } else {
        throw await resp.json();
      }
    } catch (err) {
      throw err;
    }
  }

  const onSubmit = (data, e) => {
    e.preventDefault();
    const docRef = collection(db, 'proyectoss')
    addDoc(docRef, {
      ...data,
      fecha: Date.now(),
      foto: filee
    }).then(() => {
      onClose()
    })

  };





  return (

    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <label className="text-input-formulario"><span>Nombre</span></label>
        <Form.Control
          type="text"
          placeholder="Nombre *"
          {...register("nombre", {
            required: {
              value: true,
              message: "El campo es requerido"
            },
            minLength: {
              value: 4,
              message: "el nombre debe tener al menos 4 caracteres"
            }
          })}
        />
        {errors.nombre && <span className={errors.nombre && "mensajeError"}>{errors.nombre.message}</span>}
      </Form.Group>
      <Form.Group>
        <label className="text-input-formulario"><span>Descripción</span></label>
        <Form.Control
          as="textarea"
          placeholder="Descripción"
          rows={3}
          {...register("descripcion", {
            required: {
              value: true,
              message: "El campo es requerido"
            },
            minLength: {
              value: 6,
              message: "la descripcion debe tener al menos 6 caracteres"
            }
          })}

        />
        {errors.descripcion && <span className={errors.descripcion && "mensajeError"}>{errors.descripcion.message}</span>}
      </Form.Group>
      <Form.Group>
        <label className="text-input-formulario"><span>Categoría</span></label>
        <Form.Control
          as="select"
          placeholder="Categoría"
          rows={3}
          {...register("categoria", {
            required: {
              value: true,
              message: "El campo es requerido"
            },
          })}
        > {category.map((code) =>
          <option key={code.id} value={code.nombre} descripcion={code.nombre}>{code.nombre} </option>)
          }
          {errors.categoria && <span className={errors.categoria && "mensajeError"}>{errors.categoria.message}</span>}
        </Form.Control>
      </Form.Group>
      <div>
        <input
          id="fileSelector"
          type="file"
          style={{ display: "block" }}
          accept="image/*"
          onChange={imageChange}
        />
      </div>

      {filee ? (
        <div>
          <Image
            src={filee}
            alt="Thumb"
            width="150px" height="150px"
          />
        </div>
      ) : null

      }
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













