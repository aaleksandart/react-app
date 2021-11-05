import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//ROUTES
import Customers from './views/Customers';
import Register from './views/Register';
import Products from './views/Products';
import Home from './views/Home';
//COMPONENTS
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/customers" exact component={Customers} />
        <Route path="/register" exact component={Register} />
        <Route path="/products" exact component={Products} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
