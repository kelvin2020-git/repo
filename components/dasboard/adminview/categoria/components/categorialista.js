import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {CategoryContext} from '../contexts/CategoriaContext';
import Category from './categoria';
import AddForm from './AddForm';
import Pagination from './Pagination';

const CategoryList = () => {
    const {sortedCategory} = useContext(CategoryContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [CategoryPerPage] = useState(4)
    
    useEffect(() => {
        handleClose();
       
    }, [sortedCategory])
    const indexOfLastCategory = currentPage * CategoryPerPage;
    const indexOfFirstCategory = indexOfLastCategory - CategoryPerPage;
    const currentCategory = sortedCategory.slice(indexOfFirstCategory, indexOfLastCategory);
    const totalPagesNum = Math.ceil(sortedCategory.length / CategoryPerPage);
    return (
    <>
     <div className="tablacontenedor">
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Categoría </h2>
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
                <th>Fecha Creación</th>
                <th>Fecha Modificación</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentCategory.map(categoria => (
                      <tr key={categoria.id}>
                        <Category key={categoria.id} categoria={categoria} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>
    </div>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentCategory ={currentCategory}
                sortedCategory = {sortedCategory} />

<Modal  show={show}    onHide={handleClose}
                backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>
                Agregar Categoría
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm onClose={handleClose}/>
       </Modal.Body> 
    </Modal>
    </>
    )
}

export default CategoryList;