import UsuariosList from './components/usuariosList';
import UsuariosContextProvider from './contexts/usuariosContext';

function Usuario() {
  return (
    <div className="cont" >
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
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
