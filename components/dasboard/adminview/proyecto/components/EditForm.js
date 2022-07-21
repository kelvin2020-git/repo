import React, { useEffect } from 'react';
import { Form, Button } from "react-bootstrap"
import { db } from "../../../../firebase/firebase-config"
import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { onSnapshot, collection } from 'firebase/firestore';

const EditForm = ({ theproyecto, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const id = theproyecto.id;
  const [nombre, setNombre] = useState(theproyecto.nombre);
  const [descripcion, setDescripcion] = useState(theproyecto.descripcion);
  const [categoria, setCategoria] = useState(theproyecto.categoria);
  const [foto] = useState(theproyecto.foto);
  const [file, setFile] = useState(null)
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

  const onSubmit = (data) => {
    updateDoc(doc(db, "proyectoss", id), {
      ...data, foto: file
    }
    )
    onClose()
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
  const imageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      startUploading(file);
    }

  };



  return (

    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <label className="text-input-formulario"><span>Nombre</span></label>
        <Form.Control
          type="text"
          placeholder="Nombre *"
          name="nombre"
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
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        {errors.nombre && <span className={errors.nombre && "mensajeError"}>{errors.nombre.message}</span>}
      </Form.Group>
      <Form.Group>
        <label className="text-input-formulario"><span>Descripción</span></label>
        <Form.Control
          as="textarea"
          placeholder="Descripción"
          rows={3}
          name="descripcion"
          value={descripcion}
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
          onChange={(e) => setDescripcion(e.target.value)}
        />
        {errors.descripcion && <span className={errors.descripcion && "mensajeError"}>{errors.descripcion.message}</span>}
      </Form.Group>
      <Form.Group>
        <label className="text-input-formulario"><span>Categoría</span></label>
        <Form.Control
          as="select"
          placeholder="Categoría"
          rows={3}
          name="categoria"
          value={categoria}
          {...register("categoria", {
            required: {
              value: true,
              message: "El campo es requerido"
            },
          })}
          onChange={(e) => setCategoria(e.target.value)}
        > {category.map((code) =>
          <option key={code.id} value={code.nombre} descripcion={code.nombre}>{code.nombre} </option>)
          }
        </Form.Control>
        {errors.categoria && <span className={errors.categoria && "mensajeError"}>{errors.categoria.message}</span>}
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
      {file ? (
        <div>
          <Image
            src={file}
            alt="Thumb"
            width="150px" height="150px"
          />
        </div>
      ) : (
        <Image
          src={foto}
          alt="Thumb"
          width="150px" height="150px"
        />
      )}
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