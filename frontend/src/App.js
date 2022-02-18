import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom"
import Navigation from './components/Navigation';
import Home from "./screens/Home"
import Services from './screens/Services';
import Contact from "./screens/Contact"
import Reason from './screens/Reason';
import RequestService from './screens/RequestService';
import About from './screens/About';
import { ServiceContext, ServiceProvider } from './context/Context';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/faq" element={<Reason/>}/>
        <Route path="/services" element={
        <ServiceProvider>
          <Services/>
        </ServiceProvider>
        }/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service-request" element={<RequestService/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
