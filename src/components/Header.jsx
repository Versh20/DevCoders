

import { useState } from "react"
import allenLogo from "../assets/allen-logo.png"

const Header = () => {
const [activeLink, setActiveLink] = useState("Courses")

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <img src={allenLogo || "/placeholder.svg"} alt="ALLEN Logo" className="logo" />
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li className={activeLink === "Courses" ? "active" : ""}>
              <a href="#courses">Courses</a>
            </li>
            <li className={activeLink === "TestSeries" ? "active" : ""}>
              <a href="#test-series">Test Series</a>
            </li>
            <li className={activeLink === "Scholarships" ? "active" : ""}>
              <a href="#scholarships">Scholarships</a>
            </li>
            <li className={activeLink === "Results" ? "active" : ""}>
              <a href="#results">
                Results
                <span className="new-badge">NEW</span>
              </a>
            </li>
            <li className={activeLink === "StudyMaterials" ? "active" : ""}>
              <a href="#study-materials">Study Materials</a>
            </li>
            <li className={activeLink === "AboutUs" ? "active" : ""}>
              <a href="#about-us">About us</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="phone-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header

