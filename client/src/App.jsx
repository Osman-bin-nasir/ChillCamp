import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Campgrounds from "./pages/Campground"

function App() {


  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campgrounds" element={<Campgrounds />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
