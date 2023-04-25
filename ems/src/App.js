import logo from './logo.svg';
import './dashboard.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard'
import Home from './Website/Home';
import Student from './Component/Student';

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
        <Route extact path="/student" element={<Student />}></Route>
      </Routes>
    </div>
  );
}

export default App;
