import logo from "./logo.svg";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Catgory";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Installation from "./pages/Installation";
import Delivery from "./pages/Delivery";
import Guarantee from "./pages/Guarantee";
import Payment from "./pages/Payment";


function App() {
  return (
    
   <>  
      <Router>

      <Header />
          <main className="container ">
         
            <Switch>  
              <Route exact path="/" > 
              <Home />
              </Route>
              
              <Route path="/about" component={About} />
              <Route path="/installation" component={Installation} />
              <Route path="/delivery" component={Delivery} />
              <Route path="/guarantee" component={Guarantee} />
              <Route path="/payment" component={Payment} />
              <Route path="/category/:name" component={Category} />
              <Route path="/contact" component={Contact} />
              <Route  component={NotFound} />
            </Switch>
     
         </main>
        <Footer />
   
      </Router>
  </> 
  );
}

export default App;
