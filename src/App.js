import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import background from './components/Assets/img/fondo3.jpg'
import { CartProvider } from './components/Context/CartContext';



function App() {
  return (

    <div className="App">
      <div className='imgfondo' style={{ backgroundImage: `url(${background})` }}>



        <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
