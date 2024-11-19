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
import ProductState from './context/ProductState';
import Signup from './components/Signup';
import Login from './components/Login';
import Textmanipulator from './components/Textmanipulator';
import Cartitems from './components/Cartitems';
function App() {


  return (
    <>
    <ProductState>
    <Router>

    <Navbar/>
    
    <Routes>
    

    <Route path="/"element={<Home />}/>
    <Route path="/about"element={<About />}/>
    <Route path="/contact"element={<Contact />}/>
    <Route path="/user/:userId/:userName" element={<User />} />
    <Route path="/user" element={<UserList />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/textmanipulator" element={<Textmanipulator/>} />
    <Route path="/cartitem" element={<Cartitems/>} />

    
       
        </Routes>
        </Router>
        </ProductState>
    </>
  )
}

export default App
