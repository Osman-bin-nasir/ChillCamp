import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Campgrounds from "./pages/Campground"
import CampgroundDetails from './pages/CompgroundDetails';
import CampgroundNew from './pages/CampgroundNew'

function App() {


  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campgrounds/:id" element={<CampgroundDetails />} />
            <Route path="/campgrounds" element={<Campgrounds />} />
            <Route path="/campgrounds/new" element={<CampgroundNew />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
