import ProyectoList from './components/ProyectoList';
import ProyectoContextProvider from './contexts/ProyectoContext';

function App() {
  return (
    <div className="cont" >

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
