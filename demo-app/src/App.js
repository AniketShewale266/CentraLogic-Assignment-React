import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    {/* <Home/> */}
    {/* <Contact/>
    <About/> */}
    <Footer/>
    </>
  );
}

export default App;
