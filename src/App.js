import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Headers/Header/Header';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import AuthProvider from './Contaxts/AuthProvider';
import SecureRoute from './Pages/Login/SecureRoute/SecureRoute';
import Reciption from './Pages/Reciption/Reciption';
import Register from './Pages/Register/Register';
import Facility from './Pages/Facility/Facility';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>

              <Header></Header>

                <Switch>

                   <Route exact path="/">
                     <Home></Home>
                   </Route>
       
                   <Route path="/home">
                     <Home></Home>
                   </Route>
               
                   <Route path="/login">
                     <Login></Login>
                   </Route>
               
                   <Route path="/about">
                     <About></About>
                   </Route>

                   <Route path="/riciption">
                     <Reciption></Reciption>
                   </Route>

                   <Route path="/register">
                     <Register></Register>
                   </Route>

                   <Route path="/facility">
                     <Facility></Facility>
                   </Route>
               
                   <SecureRoute path="/details/:doctorId">
                       <Details></Details>
                   </SecureRoute>
               
                   <Route path="*">
                     <NotFound></NotFound>
                   </Route>

                </Switch>
              <Footer></Footer>
            </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
