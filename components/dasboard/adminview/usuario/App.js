import UsuariosList from './components/usuariosList';
import UsuariosContextProvider from './contexts/usuariosContext';

function Usuario() {
  return (
    <div className="cont" >
    
      <div className="table-responsive">
        <div >
          <UsuariosContextProvider>
            <UsuariosList />
          </UsuariosContextProvider>
        </div>
      </div>
    </div>

  );
}

export default Usuario;
