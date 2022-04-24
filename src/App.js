import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Staff from './pages/Staff';
import Reservation from './pages/Reservation';
import Search from './pages/Search';
import Order from './pages/Order';
import Products from './components/Products';
import Dashboard from './pages/Dashboard';
import Salary from './pages/Salary';
import Notifications from './pages/Notifications';
import Location from './pages/Location';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/" component={Home} />
      <Switch>
          <ProtectedRoute path="/menu" exact component={Menu}/>
          <ProtectedRoute path="/about" exact component={About}/>
          <ProtectedRoute path="/staff" exact component={Staff}/>
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <Route path="/location" exact component={Location}/>
          <Route path="/reservation" exact component={Reservation}/>
          <ProtectedRoute path="/Order" exact component={Order}/>
          <ProtectedRoute path="/Salary" exact component={Salary}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/notifications" exact component={Notifications}/>
          {/* <Products heading='Choose your favorite' data={productData}/> */}
          
        </Switch>

        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;