import Hero from '../components/Hero'
import Info from '../components/Info'
import EssenceOfSpices from '../components/EssenceOfSpices'
import Recipies from '../components/Recipies'
import ProductFilter from '../components/Products'
import { images } from '../data/images'
export default function Home() {
  return (
      <>
          <div>          
              <Hero />
              <Info />
              <img src={images.a}/>
              <EssenceOfSpices />
              <ProductFilter />
              <Recipies />
          </div>

      </>
  )
}
