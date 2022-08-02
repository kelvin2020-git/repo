import ProyectoList from './components/ProyectoList';
import ProyectoContextProvider from './contexts/ProyectoContext';

function App() {
  return (
    <div className="cont" >
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/> 
      <div className="table-responsive">
        <div >
          <ProyectoContextProvider>
            <ProyectoList />
          </ProyectoContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
