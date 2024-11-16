import './App.css'
import About from './components/About';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Func from './components/Func';
import Home from './components/Home';

import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import User from './components/User';
import UserList from './components/UserList';
function App() {


  return (
    <>
    <Router>
   
    <Navbar/>
    
    <Routes>
    

    <Route path="/"element={<Home />}/>
    <Route path="/about"element={<About />}/>
    <Route path="/contact"element={<Contact />}/>
    <Route path="/user/:userId/:userName" element={<User />} />
    <Route path="/user" element={<UserList />} />

       
        </Routes>
        </Router>
    </>
  )
}

export default App
