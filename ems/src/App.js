import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard'
import Home from './Website/Home';

function App() {
  return (
    <div className="App">
      {/* Website Routing */}
      <Routes>
        <Route extact path="/" element={<Home />}></Route>
      </Routes>



      {/* dashboard Routing */}
      <Routes>
        <Route extact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
