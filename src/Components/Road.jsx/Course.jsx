import React from 'react'
import './Course.css'
export default function Course(){
  return (
     <section className="course">
<div className="course-container">
    <h1>Popular Courses</h1>
</div>
<div className="course-grid">
          <div className="course-card">
            <h3 className="course-title">Engineeering</h3>
            <div className="course-description">
              <ul>
                <li>Semester-wise Integrated Classroom Course</li>
                <li>Last minute preperation with summarised solution</li>
              </ul>
            </div>
            <button className="course-button">Chcek More</button>
          </div>
          <div className="course-card">
            <h3 className="course-title">Medical</h3>
            <div className="course-description">
              <ul>
                <li>Practice with past papers with diagrams</li>
                <li>Focus on visual aids with flashcards</li>
              </ul>
              </div>
              <button className="course-button">Chcek More</button>
          </div>
          <div className="course-card">
            <h3 className="course-title">Foundation</h3>
            <div className="course-description">
              <ul>
                <li>Brush up on prerequisite skills using concise review</li>
                <li>Create a digital folder structure and note template</li>
              </ul>
            </div>
            <button className="course-button">Chcek More</button>
          </div>
        </div>
        </section>
  )
}
