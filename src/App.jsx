import Navbar from "./components/Navbar"
import Recipies from "./components/Recipies"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
function App() {

  return (
    <>
      <Router>
        <div className="navbar fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Recipies />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
