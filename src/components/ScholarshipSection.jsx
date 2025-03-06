import ScholarshipCard from "./ScholarshipCard"

const ScholarshipSection = () => {
  const scholarships = [
    {
      id: "jee",
      title: "AOSAT for JEE",
      image: "/placeholder.svg?height=100&width=100",
      alt: "JEE scholarship icon",
    },
    {
      id: "neet",
      title: "AOSAT for NEET",
      image: "/placeholder.svg?height=100&width=100",
      alt: "NEET scholarship icon",
    },
    {
      id: "classes",
      title: "AOSAT for Classes 6-10",
      image: "/placeholder.svg?height=100&width=100",
      alt: "Classes 6-10 scholarship icon",
    },
  ]

  return (
    <section className="scholarship-section">
      <div className="container scholarship-container">
        <div className="scholarship-header">
          <h2 className="scholarship-title">ALLEN Online Scholarship Test</h2>
          <p className="scholarship-subtitle">Register now and get a chance to win scholarship</p>
        </div>

        <div className="scholarship-cards">
          {scholarships.map((scholarship) => (
            <ScholarshipCard
              key={scholarship.id}
              title={scholarship.title}
              image={scholarship.image}
              alt={scholarship.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScholarshipSection

