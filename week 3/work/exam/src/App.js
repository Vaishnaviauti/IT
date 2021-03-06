
import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar.component';

import Footer from './components/footer.component';
import Notfound from './pages/notfound.pages';

import Home from './Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
