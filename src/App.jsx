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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Recipies />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
