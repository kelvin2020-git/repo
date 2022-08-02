import CategoryList from './components/categorialista';
import CategoryContextProvider from './contexts/CategoriaContext';

function App() {
  return (
    <div className="" >
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/> 
      <div className="table-responsive">
        <div >
          <CategoryContextProvider>
            <CategoryList />
          </CategoryContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
