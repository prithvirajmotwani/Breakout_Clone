
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Girls from './pages/Girls/Girls';
import Boys from './pages/Boys/Boys';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import { CartProvider } from './components/Cart/CartContext'; 

import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <CartProvider> 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} /> 
            <Route path="/men" element={<Men productType="new-drip" />} /> 
            <Route path="/women" element={<Women productType="new-drip" />} /> 
            <Route path="/boys" element={<Boys productType="new-drip" />} /> 
            <Route path="/girls" element={<Girls productType="new-drip" />} /> 

            <Route path="/men/new-drip" element={<Men productType="new-drip" />} /> 
            <Route path="/men/clothing" element={<Men productType="clothing" />} /> 

            <Route path="/women/new-drip" element={<Women productType="new-drip" />} /> 
            <Route path="/women/clothing" element={<Women productType="clothing" />} /> 

            <Route path="/boys/new-drip" element={<Boys productType="new-drip" />} /> 
            <Route path="/boys/clothing" element={<Boys productType="clothing" />} /> 
            
            <Route path="/girls/new-drip" element={<Girls productType="new-drip" />} /> 
            <Route path="/girls/clothing" element={<Girls productType="clothing" />} /> 

            <Route path="/register" element={<Register />} />

            <Route path="/products/:id" element={<ItemDetail />} />
            <Route path="/checkout" element={<Checkout />} /> 
          </Routes>
        </BrowserRouter> 

        <Footer />
      </CartProvider> 
    </div>
  );
}

export default App;
