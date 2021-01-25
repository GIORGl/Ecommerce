import './App.css';
import Body from './Components/Nav/Body/Body';
import Nav from './Components/Nav/Nav'
import {ProductCategoryProvider} from './Components/Nav/Body/ProductCategoryContext';

function App() {
  
  return (
    <ProductCategoryProvider>
  <div className="app">
    <Nav />
    <Body />
    </div>
    </ProductCategoryProvider>
  
  );
}

export default App;
