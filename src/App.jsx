import Header from "./components/Header"
import HeroBanner from "./components/HeroBanner"
import CoachingSection from "./components/CoachingSection"
import ScholarshipSection from "./components/ScholarshipSection"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CoachingSection />
        <ScholarshipSection />
      </main>
    </div>
  )
}

export default App

