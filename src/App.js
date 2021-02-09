import "./App.css";
import Body from "./Components/Nav/Body/Body";
import Nav from "./Components/Nav/Nav";
// import { ProductContextProvider } from "./ProductCategoryContext";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Product from "./Components/Nav/Body/Product";
import Checkout from "./Components/Nav/Checkout.js/Checkout";
// import { ProductCategoryProvider } from "./CategoryContextValue";
function App() {
  return (
    // <ProductCategoryProvider>
    // <ProductContextProvider>
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Nav />
            <Checkout />
          </Route>
          <Route path="/product">
            <Nav />
            <Product />
          </Route>
          <Route path="/" exact>
            <Nav />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
    /* </ProductContextProvider> */
    /* // </ProductCategoryProvider> */
  );
}

export default App;
