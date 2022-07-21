
import {useContext, useEffect, useState } from 'react';
import {UsuarioContext} from '../contexts/usuariosContext';
import Usuarios from './usuarios';
import Pagination from './Pagination';

const UsuariosList = () => {
    const {sortedUsuarios} = useContext(UsuarioContext);
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [UsuarioPerPage] = useState(4)
    
    useEffect(() => {
        handleClose();
       
    }, [sortedUsuarios])
    const indexOfLastUsuario= currentPage * UsuarioPerPage;
    const indexOfFirstUsuario = indexOfLastUsuario - UsuarioPerPage;
    const currentUsuario = sortedUsuarios.slice(indexOfFirstUsuario, indexOfLastUsuario);
    const totalPagesNum = Math.ceil(sortedUsuarios.length / UsuarioPerPage);
    return (
    <>
    <div className="tablacontenedor">
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Usuario Roles </h2>
            </div>
        
        </div>
    </div>
 

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Fecha Creación</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentUsuario.map(usuario => (
                      <tr key={usuario.id}>
                        <Usuarios key={usuario.id} usuario={usuario} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>
    </div>
    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentUsuario ={currentUsuario}
                sortedUsuarios = {sortedUsuarios} />


    </>
    )
}

export default UsuariosList;