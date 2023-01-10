
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Category from './Components/Category';
import Testing from './Components/Testing';
import { Cart } from './Components/Cart';
 


function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>        
          <Route path='/' element ={<Home />} />                    
          {/* <Route path='/products/:id' element={ <ProductDetails />} />           */}
          <Route path='/category/:category' element={ <Category />} />          
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='testing' element={<Testing />} /> */}

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
