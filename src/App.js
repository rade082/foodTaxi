import './App.css';
import Menu from './components/menu/Menu';
import Home from './components/UI/Home';
import Navbar from './components/UI/Navbar';
import {Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import Login from './components/UI/Login';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
