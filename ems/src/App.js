
import './dashboard.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard'
import Student from './Component/Student';
import Sidebar from './Component/SidebarMenu';
import AddStudent from './Component/AddStudent'
import EditStudent from './Component/EditStudent';


//Home page
import './Website.css'
import Home from './Website/Home';
import Home1 from './Website/About/AboutUs/Home1';
import Home2 from './Website/About/OurAim/Home2';
import Home3 from './Website/Contacts/Home3';
import Home4 from './Website/Gallery/Home4';
import HomeR from './Website/Course/Software/HomeR';
import Home6 from './Website/Students/Home6';
import Home7 from './Website/Students/Book/Home7';
import Home8 from './Website/Students/Logins/Home8';
import Hero9 from './Website/Students/Placement/Hero9';
import Home10 from './Website/Students/Query/Home10';
import HomeH from './Website/Course/Hardware/HomeH';
import HomeJ from './Website/Course/Jobcourse/HomeJ';
import HomeS from './Website/Course/skill/HomeS';
import HomeA from './Website/Process/HomeA';
import HomeP from './Website/Process/Reason/HomeP';
import HomeI from './Website/Process/Ragister/HomeI';
import HomeF from './Website/Process/NTTFrenchise/HomeF';
import HomeT from './Website/Process/Topcenter/HomeT';


function App() {
  return (
    <div className="App">
      {/* Website Routing */}
      <Routes>
        <Route extact path="/" element={<Home />}></Route>
        <Route extact path="/Aboutus" element={<Home1 />}></Route>
        <Route extact path="/OurAim" element={<Home2 />}></Route>
        <Route extact path="/Gallery" element={<Home4 />}></Route>
        <Route extact path="/Contacts" element={<Home3 />}></Route>
        <Route extact path="/Course" element={<HomeR />}></Route>
        <Route extact path="/Students" element={<Home6 />}></Route>
        <Route extact path="/Book" element={<Home7 />}></Route>
        <Route extact path="/Login" element={<Home8 />}></Route>
        <Route extact path="/Placements" element={<Hero9 />}></Route>
        <Route extact path="/Qaueries" element={<Home10 />}></Route>
        <Route extact path="/Hardwares" element={<HomeH />}></Route>
        <Route extact path="/Jobcouurses" element={<HomeJ />}></Route>
        <Route extact path="/Skill" element={<HomeS />}></Route>
        <Route extact path="/Process" element={<HomeA />}></Route>
        <Route extact path="/Reason" element={<HomeP />}></Route>
        <Route extact path="/Ragister" element={<HomeI />}></Route>
        <Route extact path="/NTTFrenchise" element={<HomeF />}></Route>
        <Route extact path="/Topcenter" element={<HomeT />}></Route>
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
