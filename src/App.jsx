import Navbar from "./components/Navbar"
import {images} from './assets/images'
import Hero from "./components/Hero"
import Info from "./components/Info"
import EssenceOfSpices from "./components/EssenceOfSpices"

function App() {

  return (
    <>
      <div>
        <div className="navbar fixed top-0 left-0 w-full z-50">

        <Navbar />
        </div>
        <Hero />
        <Info />
        <EssenceOfSpices />
        <img src={images.a}/>
      </div>
      
    </>
  )
}

export default App
