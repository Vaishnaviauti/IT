import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar.component';
import Footer from './components/Footer.component';

import About from './pages/about.pages';
import Home from './Home';
import Team from './pages/team.pages';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/team' element={<Team/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;