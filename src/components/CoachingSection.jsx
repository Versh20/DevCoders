// "use client"

import { useState } from "react"
import CourseButtons from "./CourseButtons"

const CoachingSection = () => {
  const [activeSlide, setActiveSlide] = useState(2)

  const handleDotClick = (index) => {
    setActiveSlide(index)
  }

  return (
    <section className="coaching-section">
      <div className="container coaching-container">
        <div className="coaching-content">
          <h1 className="coaching-title">
            <span className="blue-text">Online</span> coaching
            <br />
            that delivers <span className="blue-text">results</span>
          </h1>

          <p className="explore-text">Explore our online courses</p>

          <CourseButtons />
        </div>

        <div className="coaching-visuals">
          <div className="student-illustration">
            <img src="/placeholder.svg?height=200&width=150" alt="Student illustration" className="student-image" />
          </div>

          <div className="results-card">
            <div className="result-number">676</div>
            <div className="result-text">
              IIT Seats
              <br />
              secured by
              <br />
              ALLENites in 2024
            </div>
            <div className="student-avatars">
              <div className="avatar">
                <img src="/placeholder.svg?height=40&width=40" alt="Student" />
                <span>AIR 1</span>
              </div>
              <div className="avatar">
                <img src="/placeholder.svg?height=40&width=40" alt="Student" />
                <span>MAYU</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-dots">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              className={`dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoachingSection

