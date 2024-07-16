import Home from '../src/pages/Home'
import AboutUs from '../src/pages/AboutUs'
import Service from '../src/pages/Service'
import Career from '../src/pages/Career'
import Blog from '../src/pages/Blog'
import BlogDescription from '../src/pages/BlogDescription'
import Contact from '../src/pages/Contact'
import Login from '../src/pages/Login'
import Logout from '../src/pages/Logout'
import Register from '../src/pages/Register'
import Privacy from '../src/pages/Privacy'
import Terms from '../src/pages/Terms'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogdescription" element={<BlogDescription/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
