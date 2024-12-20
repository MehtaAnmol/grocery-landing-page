import NavBar from "./components/navbar"
import HeroSection from "./components/heroSection/HeroSection"
import FeaturedProducts from "./components/featuredSection/FeaturedProducts"
import Categories from "./components/categorySection/Categories"


export default function App(){
  return(
    <div>
      <div className = "bg-[#A8CD89] border-2 border-black">
        <NavBar/>
        <HeroSection/>
      </div>
      <FeaturedProducts/>
      <Categories/>
    </div>
  )
}