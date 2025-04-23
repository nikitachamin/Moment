import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Category = lazy(() => import('./pages/Category')); // проверьте имя файла!
const Installation = lazy(() => import('./pages/Installation'));
const Delivery = lazy(() => import('./pages/Delivery'));
const Guarantee = lazy(() => import('./pages/Guarantee'));
const Payment = lazy(() => import('./pages/Payment'));
const NotFound = lazy(() => import('./pages/NotFound'));



function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/installation" component={Installation} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/guarantee" component={Guarantee} />
            <Route path="/payment" component={Payment} />
            <Route path="/category/:name" component={Category} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
