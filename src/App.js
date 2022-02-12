import { Switch, Route } from "react-router-dom";
import "./App.css";
import './global.scss';
import { Header } from "./components/Header";

import ContactUs from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { Footer } from './components/Footer';
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";

function App() {
  return (
    <div className="App">      
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
