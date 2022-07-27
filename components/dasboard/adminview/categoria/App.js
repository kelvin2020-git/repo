import CategoryList from './components/categorialista';
import CategoryContextProvider from './contexts/CategoriaContext';

function Categoria() {
  return (
    <div className="" >
  
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

export default Categoria;
