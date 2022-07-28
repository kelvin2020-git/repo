import CategoryList from './components/categorialista';
import CategoryContextProvider from './contexts/CategoriaContext';

function App() {
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

export default App;
