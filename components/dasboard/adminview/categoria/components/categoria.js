import { useState, useEffect} from 'react';
import Swal from "sweetalert2";
import {Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
import {collection,addDoc,deleteDoc,doc} from 'firebase/firestore';

import {  db }from "../../../../firebase/firebase-config";
import moment from 'moment'
import 'moment/locale/es' // Pasar a español

const Category = ({categoria}) => {
    const id = categoria.id
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [categoria])

    const deleteEmployee = (id) => {
        Swal.fire({
          title: "¿Desea eliminar esta categoría?",
          text: "Sus datos se borraran de formar permanente",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        }).then((resultado) => {
          if (resultado.value) {
          
            const noteRef = doc(db, `categoria/${id}`);
             deleteDoc(noteRef);
    
            console.log("*si se elimino el lugar*");
          } else {
            console.log("*no se elimino el lugar*");
          }
        });
      };

  
    return (
        <>
            <td>{categoria.nombre}</td>
            
            <td>{moment(categoria.fecha).format('MMMM Do YYYY, h:mm:ss a')} </td>
            <td>{moment(categoria.modificacion).format('MMMM Do YYYY, h:mm:ss a')} </td>
            <td  className="btntext" >
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                           editar
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn-editar" ><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Eliminar
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(categoria.id)}  className=" btn-delete" ><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>
        <Modal  show={show}    onHide={handleClose}  backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>
                Editar Categoría
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm  thecategoria={categoria} onClose={handleClose} />
        </Modal.Body>
       </Modal>
        </>
    )
}

export default Category;