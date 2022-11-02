import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
// import Footer from "./components/Footer/Footer";
import Abc from "./components/Main/Abc";


function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
    <Route path='/' element={<Header/>} />
    <Route path="/abc" element={<Abc />} />
    </Routes>
    {/* <Home/> */}
    {/* <Footer/> */}
   
    </BrowserRouter>
    </>
  );
}

export default App;
