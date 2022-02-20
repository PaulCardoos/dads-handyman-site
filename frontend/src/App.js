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
import RequestService from './screens/RequestService';
import About from './screens/About';
import Choose from "./screens/Choose"
import { ServiceProvider } from './context/Context';
function App() {
  return (
    <div className="App">
      <ServiceProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Choose />} />
            <Route path="/services" element={
              <Services />
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-request" element={<RequestService />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ServiceProvider>
    </div>
  );
}

export default App;
