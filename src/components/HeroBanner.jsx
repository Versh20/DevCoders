const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="container banner-container">
        <div className="offer-tag">
          <span className="ends-on">ENDS ON</span>
          <span className="date">DEC 22</span>
        </div>

        <div className="banner-content">
          <h2 className="banner-text">
            Last chance to grab <span className="highlight">20% Off</span> Early Bird Offer.
          </h2>
          <button className="enrol-button">Enrol Now</button>
        </div>
{/* 
        <div className="banner-image">
          <img src="/placeholder.svg?height=120&width=120" alt="Student with books" />
        </div> */}
      </div>
    </section>
  )
}

export default HeroBanner

