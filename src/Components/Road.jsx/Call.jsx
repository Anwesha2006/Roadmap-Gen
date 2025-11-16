import {React,useState} from 'react'
import './Call.css'

export default function Call(){
  
  return (
    <div className="call-section">
    <h1>Talk to Our Expert</h1>
    <button className="call-button">
      <img src="/callicon.png" alt="Call icon"/>
      Call now for free
      </button>
    </div>
  )
}

