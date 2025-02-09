import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Route,Routes } from 'react-router-dom';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog'
import ResearchPapers from './pages/ResearchPapers';
import Projects from './pages/Projects';
import Conferences from './pages/Conferences';
import TeachingExperiences from './pages/TeachingExperiences';
import Awards from './pages/Awards';
import Collaborations from './pages/Collaborations';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App({isVisible}) {

  const[isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    
    <div className='bg-slate-900 w-full h-full'>
      {/* <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> */}

      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/achievements" element = {<Achievements/>} />
        <Route path="/blogs" element = {<Blog/>} />
        <Route path="/research" element = {<ResearchPapers/>} />
        <Route path="/projects" element = {<Projects/>} />
        <Route path="/conferences" element = {<Conferences/>} />
        <Route path="/experiences" element = {<TeachingExperiences/>} />
        <Route path="/awards" element = {<Awards/>} />
        <Route path="/collaborations" element = {<Collaborations/>} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/> 
          </PrivateRoute>} />
        <Route path="/login" element = {<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
