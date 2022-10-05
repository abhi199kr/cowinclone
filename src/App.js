
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ddashboard from './Components/Ddashboard';
import Login from './Components/Login';
import Partner from './Components/Partner';
import FAQ from './Components/FAQ';
import Vcertify from './Components/Vcertify';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/Ddashboard" element={<Ddashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/partner" element={<Partner />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route path="/vcertify" element={<Vcertify/>}></Route>
      

    </Routes>
  </BrowserRouter>
  );
}

export default App;
