import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Project01 from './projectsub/Project01.jsx'
import Project02 from './projectsub/Project02.jsx'
import Project03 from './projectsub/Project03.jsx'
import Project04 from './projectsub/Project04.jsx'
import Project05 from './projectsub/Project05.jsx'
import Project06 from './projectsub/Project06.jsx'
import Project07 from './projectsub/Project07.jsx'
import Project08 from './projectsub/Project08.jsx'
import Project09 from './projectsub/Project09.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />      
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Project.01' element={<Project01/>}/>
      <Route path='/Project.02' element={<Project02/>}/>
      <Route path='/Project.03' element={<Project03/>}/>
      <Route path='/Project.04' element={<Project04/>}/>
      <Route path='/Project.05' element={<Project05/>}/>
      <Route path='/Project.06' element={<Project06/>}/>
      <Route path='/Project.07' element={<Project07/>}/>
      <Route path='/Project.08' element={<Project08/>}/>
      <Route path='/Project.09' element={<Project09/>}/>

    </Routes>
  </BrowserRouter>
);
