import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResultList from "./pages/SearchResultList";
// import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/home.scss"
import "./styles/tour.scss"
import "./styles/tourDetails.scss"
import "./styles/thankYou.scss";
import "./styles/login.scss";
import ThankYou from "./pages/ThankYou";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
<ToastContainer/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/tours/:id" element={<TourDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/tours/search" element={<SearchResultList/>}/>
        <Route path="/thankYou" element={<ThankYou/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
