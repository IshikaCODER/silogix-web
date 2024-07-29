import Home from '../src/pages/Home'
import Company from '../src/pages/Company'
import Service from '../src/pages/Service'
import Career from '../src/pages/Career'
import Blog from '../src/pages/Blog'
import BlogDescription from '../src/pages/BlogDescription'
import Contact from '../src/pages/Contact'
import Privacy from '../src/pages/Privacy'
import Terms from '../src/pages/Terms'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FAQ from './pages/FAQs'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogdescription" element={<BlogDescription/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/faqs" element={<FAQ/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;



// // project import
// import Routes from './routes';

// const App = () => (
//   <>
//   console.log('App component rendered');
//   <Routes />
//   </>
// );

// export default App;
