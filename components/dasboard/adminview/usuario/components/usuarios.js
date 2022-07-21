import {useContext, useState, useEffect} from 'react';
import Swal from "sweetalert2";
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
import { deleteDoc, updateDoc } from "firebase/firestore";
import {  db,doc }from "../../../../firebase/firebase-config";
import moment from 'moment'
import 'moment/locale/es' // Pasar a español

const Employee = ({usuario}) => {
  
    
    const id = usuario.id

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [usuario])

    const deleteEmployee = (id) => {
        Swal.fire({
          title: "¿Desea eliminar este usuario?",
          text: "Sus datos se borraran de formar permanente",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        }).then((resultado) => {
          if (resultado.value) {
          
            const noteRef = doc(db, `usuarios/${id}`);
             deleteDoc(noteRef);
    
            console.log("*si se elimino el lugar*");
          } else {
            console.log("*no se elimino el lugar*");
          }
        });
      };

 
    return (
        <>
            <td>{usuario.nombre}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.rol}</td>
            <td>{moment(usuario.fecha).format('MMMM Do YYYY, h:mm:ss a')} </td>
           
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
                    <button onClick={() => deleteEmployee(usuario.id)}  className=" btn-delete" ><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>
            <Modal  show={show}    onHide={handleClose}
                backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>
                Editar Roles
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm  theusuario={usuario} onClose={handleClose} />
        </Modal.Body>
  
    </Modal>
            

        </>
    )
}

export default Employee;