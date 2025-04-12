import Navbar  from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Routes/Home";
import Services from "./Routes/Services";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Sign from "./Routes/Sign_Up";
import TravelList from "./Routes/TravelList";
function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Sign" element={<Sign/>}/>
        <Route path="/blog/src/Routes/TravelList.js" element={<TravelList/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
