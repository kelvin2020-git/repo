import {useState, useEffect} from 'react';
import Swal from "sweetalert2";
import { Modal,OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
import { deleteDoc,doc } from "firebase/firestore";
import {  db }from "../../../../firebase/firebase-config";
import moment from 'moment'
import 'moment/locale/es' // Pasar a español

const Proyect = ({proyecto}) => {
  
    
    const id = proyecto.id

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [proyecto])

    const deleteEmployee = (id) => {
        Swal.fire({
          title: "¿Desea eliminar este proyecto",
          text: "Sus datos se borraran de formar permanente",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        }).then((resultado) => {
          if (resultado.value) {
          
            const noteRef = doc(db, `proyectoss/${id}`);
             deleteDoc(noteRef);
    
            console.log("*si se elimino el lugar*");
          } else {
            console.log("*no se elimino el lugar*");
          }
        });
      };


    return (
        <>
            <td>{proyecto.nombre}</td>
            <td className="contenido">{proyecto.descripcion}</td>
            <td>{proyecto.categoria}</td>
            <td>{moment(proyecto.fecha).format('MMMM Do YYYY, h:mm:ss a')} </td>
          
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
                    <button onClick={() => deleteEmployee(proyecto.id)}  className=" btn-delete" ><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>
            <Modal show={show}    onHide={handleClose}
                backdrop="static"
               
        >
        <Modal.Header closeButton>
            <Modal.Title>
            Editar proyecto
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm  theproyecto={proyecto} onClose={handleClose} />
        </Modal.Body>
  
    </Modal>
            

        </>
    )
}

export default Proyect;