import logo from './logo.svg';
import './dashboard.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard'
import Home from './Website/Home';
import Student from './Component/Student';
import Sidebar from './Component/SidebarMenu';
import AddStudent from './Component/AddStudent'
import EditStudent from './Component/EditStudent';

function App() {
  return (
    <div className="App">
      {/* Website Routing */}
      <Routes>
        <Route extact path="/" element={<Home />}></Route>
      </Routes>



      {/* dashboard Routing */}
      <Sidebar>
        <Routes>
          <Route extact path="/dashboard" element={<Dashboard />}></Route>
          <Route extact path="/student" element={<Student />}></Route>
          <Route extact path="/addstudent" element={<AddStudent />}></Route>
          <Route extact path="/editstudent" element={<EditStudent />}></Route>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
