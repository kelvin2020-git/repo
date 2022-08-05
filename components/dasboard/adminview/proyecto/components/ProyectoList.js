import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {ProyectoContext} from '../contexts/ProyectoContext';
import Proyect from './Proyecto';
import AddForm from './AddForm';
import Pagination from './Pagination';

const ProyectoList = () => {
    const {sortedProyecto} = useContext(ProyectoContext);
  
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [ProyectoPerPage] = useState(4)
    
    useEffect(() => {
        handleClose();
       
    }, [sortedProyecto])



    const indexOfLastProyecto = currentPage * ProyectoPerPage;
    const indexOfFirstProyecto = indexOfLastProyecto - ProyectoPerPage;
    const currentProyecto = sortedProyecto.slice(indexOfFirstProyecto, indexOfLastProyecto);
    const totalPagesNum = Math.ceil(sortedProyecto.length / ProyectoPerPage);
    return (
    <>
    <div className="tablacontenedor">
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Proyectos </h2>
            </div>
           <div className="btn-agregarr">
                <Button onClick={handleShow} className="btn-agregar" > Agregar</Button>					
            </div>
        </div>
    </div>
 

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Fecha Creación</th>
          
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentProyecto.map(proyecto => (
                      <tr key={proyecto.id}>
                        <Proyect key={proyecto.id} proyecto={proyecto} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>
    </div>
    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentProyecto ={currentProyecto}
                sortedProyecto = {sortedProyecto} />

<Modal show={show}    onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>
                Agregar Proyecto
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm onClose={handleClose}/>
       </Modal.Body> 
    </Modal>
    </>
    )
}

export default ProyectoList;