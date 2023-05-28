import Hero from '../components/Hero'
import Info from '../components/Info'
import EssenceOfSpices from '../components/EssenceOfSpices'
import Recipies from '../components/Recipies'
import ProductFilter from '../components/Products'
export default function Home() {
  return (
      <>
          <div>          
              <Hero />
              <Info />
              <EssenceOfSpices />
              <ProductFilter />
              <Recipies />
          </div>

      </>
  )
}
