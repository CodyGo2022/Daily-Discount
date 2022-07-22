import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './components/landing-page/Home';
import SignIn from './components/landing-page/SignIn';
import SignUp from './components/landing-page/SignUp';
import HeroesSkins from './components/landing-page/HeroesSkins';
import Pricing from './components/landing-page/Pricing';
import Dashboard from './components/user-page/Dashboard';
import UserHeroesSkins from './components/user-page/HeroesSkins';
import UserPricing from './components/user-page/Pricing';
import UserOrderDetails from './components/user-page/OrderDetails';
import UserCart from './components/user-page/Cart';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route exact path='/' element={<Home/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/heroes-and-skins' element={<HeroesSkins/>} />
        <Route path='/pricing' element={<Pricing/>} />

        {/* User Page */}
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/user-heroes-and-skins' element={<UserHeroesSkins/>} />
        <Route path='/user-pricing' element={<UserPricing/>} />
        <Route path='/user-order-details' element={<UserOrderDetails/>} />
        <Route path='/user-cart' element={<UserCart/>} />
      </Routes>
    </Router>
  );
}

export default App;
