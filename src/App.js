import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import routes from './routes';
import ScrollTop from './components/third-party/ScrollTop';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <ScrollTop>
    <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      </ScrollTop>
      <Footer/>
    </BrowserRouter>
  );
}


export default App;
