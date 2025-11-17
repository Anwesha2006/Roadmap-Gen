import React, { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Home.jsx/Header'
import Hero from './Components/Home.jsx/Hero'
import Features from './Components/Home.jsx/Features'
import SocialProof from './Components/Home.jsx/SocialProof'
import Roadmap from './Components/Road.jsx/Roadmap'
import Course from './Components/Road.jsx/Course'
import Call from './Components/Road.jsx/Call'
import PyqSection from './Components/Pyqlocal.jsx/PyqSection'
import SignupForm from './Components/Login.jsx/SignUpForm'
export default function App() {
  return (
    
      <Router>
        
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
        
      <Hero/>
      <Features/>
      <SocialProof/>
      </>
        }
        />
     <Route path="/roadmap" element={
      <>
      <Roadmap/>
      <Course/>
      <Call/>
      
      </>
    }/>
    <Route path="/pyq" element={
      <>
      <PyqSection/>
      </>
    }/>
    <Route path="/signin" element={
      <>
      <SignupForm/>
      </>
    }/>
      </Routes>
      </Router>
  )
}


