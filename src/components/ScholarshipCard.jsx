const ScholarshipCard = ({ title, image, alt }) => {
  return (
    <div className="scholarship-card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <button className="register-button">
          Register
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="card-image">
        <img src={image || "/placeholder.svg"} alt={alt} />
      </div>
    </div>
  )
}

export default ScholarshipCard

