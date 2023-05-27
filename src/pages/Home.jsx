import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import EssenceOfSpices from '../components/EssenceOfSpices'
import Recipies from '../components/Recipies'

export default function Home() {
  return (
      <>
          <div>
              <div className="navbar fixed top-0 left-0 w-full z-50">

                  <Navbar />
              </div>
              <Hero />
              <Info />
              <EssenceOfSpices />
              <Recipies />
          </div>

      </>
  )
}
