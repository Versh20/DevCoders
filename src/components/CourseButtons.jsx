//"use client"

import { useState } from "react"

const CourseButtons = () => {
  const [activeButton, setActiveButton] = useState("NEET")

  const buttons = [
    { id: "NEET", label: "NEET" },
    { id: "JEE", label: "JEE" },
    { id: "Class6-10", label: "Class 6-10" },
    { id: "TestSeries", label: "Test Series" },
  ]

  return (
    <div className="course-buttons">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`course-button ${activeButton === button.id ? "active" : ""}`}
          onClick={() => setActiveButton(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default CourseButtons

