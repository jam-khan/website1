import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Homepage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Homepage/>}/>
            <Route path='/login' exact element={<LoginPage/>}/>
            <Route path='/register' exact element={<RegisterPage/>}/>
            <Route path='/productinfo' exact element={<ProductInfo/>}/>
            <Route path='/cart' exact element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
