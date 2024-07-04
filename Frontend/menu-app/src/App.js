import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import Shopcontextapi from './context/Shopcontextapi';
import Cart from './components/Cartshop/Cart';
import Main from './components/Hompage/Main';
import Checkoutpage from './Pages/Checkoutpage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Addproduct from './Pages/Product/Addproduct';
import Removeproduct from './Pages/Product/Removeproduct';
import StripePayment from './Pages/Payment/Stripe';
import OrderHistory from './Pages/OrderHistory';
import AdminRoute from './components/AdminRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Shopcontextapi>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/shop' />
            <Route path='/contact' />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkoutpage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/order/history' element={<OrderHistory />} />
            <Route path='/checkout' />
            <Route path='/addproduct' element={<AdminRoute><Addproduct /></AdminRoute>} />
            <Route path='/removeproduct' element={<AdminRoute><Removeproduct /></AdminRoute>} />
            <Route path='/pay' element={<StripePayment />} />
          </Routes>
        </Router>
        <ToastContainer />
      </Shopcontextapi>
    </div>
  );
}

export default App;
