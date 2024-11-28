import NavBar from "./components/navbar"
import HeroSection from "./components/heroSection/HeroSection"
export default function App(){
  return(
    <div>
      <div className = "bg-[#A8CD89]">
        <NavBar/>
        <HeroSection/>
      </div>
    </div>
  )
}