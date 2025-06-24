import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Campgrounds from "./pages/Campground"
import CampgroundDetails from './pages/CompgroundDetails';
import CampgroundNew from './pages/CampgroundNew'
import CampgroundEdit from './pages/CampgroundEdit';
import Footer from './components/Footer';

function App() {


  return (
    <>
     <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campgrounds"          element={<Campgrounds />} />
            <Route path="/campgrounds/new"      element={<CampgroundNew />} />
            <Route path="/campgrounds/:id"      element={<CampgroundDetails />} />
            <Route path="/campgrounds/:id/edit" element={<CampgroundEdit />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
