import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
        <header className='head'>
           <Navbar/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/signup' element={<SignUp/>}/>
           </Routes>
        </header>
    </div>
  );
}

export default App;
