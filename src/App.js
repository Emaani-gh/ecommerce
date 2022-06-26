
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { ProductDetails } from './Components/ProductDetails';
import Hero from './Components/Hero';
import { Context } from './Components/Context';



function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/products/:id' element={ <ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
