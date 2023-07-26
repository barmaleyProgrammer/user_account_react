// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import styles from './main.module.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../header';
import Footer from "../footer";
import Home from "../../pages/Home";
import About from "../../pages/about";
import Cards from "../../pages/cards";
function Main() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="main" element={<Main/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="home" element={<Home/>} />
                    <Route path="cards" element={<Cards/>} />
                </Routes>
                <Footer  />
            </Router>
        </div>
    );
}

export default Main