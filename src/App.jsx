import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Departaments from "./pages/Departaments/Departaments";
import Contact from "./pages/Contact";
import Macbook from "./pages/Departaments/Macbook";
import { Footer } from "./components/Footer"
import Ipad from "./pages/Departaments/Ipad";
import Iphone from "./pages/Departaments/Iphone";
import StaffPage from "./pages/StaffPage";
import News from "./components/News";
import Airpods from "./pages/Departaments/Airpods";
function App() {
  
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Departments" element={<Departaments />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Macbook" element={<Macbook />} />
      <Route path="/Ipad" element={<Ipad />} />
      <Route path="/Iphone" element={<Iphone />} />
      <Route path="/Airpods" element={<Airpods />} />
      <Route path="/Contact" element={<Contact/>} /> 
      <Route path="/StaffPage" element={<StaffPage/>} /> 
      <Route path="/News" element={<News/>} />
    </Routes>

    <Footer/>

    </>

  )
}

export default App;