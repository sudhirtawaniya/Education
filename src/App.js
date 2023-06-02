import Home from "./pages/Home";
import '../src/asset/style/style.css'
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Footer from "./component/Footer";
import Assignment from "./pages/Assignments";
import ContactUs from "./pages/Contactus";
import Cources from "./pages/Cources";

function App() {
  return (

    <> 
    <Routes >
   <Route path="/" element={<Home/>}/>
   <Route path="/solution" element={<Services/>}/>
   <Route path="/assignment" element={<Assignment/>}/>
   <Route path="/contactus" element={<ContactUs/>}/>
   <Route path="/cource/:name" element={<Cources/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
