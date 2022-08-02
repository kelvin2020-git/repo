import UsuariosList from './components/usuariosList';
import UsuariosContextProvider from './contexts/usuariosContext';

function App() {
  return (
    <div className="cont" >
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/> 

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

export default App;
