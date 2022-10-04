import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<h1>LoginPage</h1>} />
        <Route path='/orders' element={<h1>OrderPage</h1>} />
        <Route path='/checkout' element={<h1>CheckoutPage</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
