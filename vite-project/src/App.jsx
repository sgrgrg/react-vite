import './App.css'
import About from './components/About';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Func from './components/Func';
import Home from './components/Home';

import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {


  return (
    <>
    <Router>
   
    <Navbar/>
    
    <Routes>
    

    <Route path="/"element={<Home />}/>
    <Route path="/about"element={<About />}/>
    <Route path="/contact"element={<Contact />}/>

       
        </Routes>
        </Router>
    </>
  )
}

export default App
