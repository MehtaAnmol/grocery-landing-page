import heroImage from "../../assets/heroImage.png"
export default function HeroSection(){
    return(
         <div>
            <div className = "flex flex-wrap gap-2 m-4 p-4 justify-center">
                <div className = "shrink-0 text-nowrap p-2 flex flex-col self-center justify-between gap-2">
                    <h2 className = "text-5xl font-bold font-mono">We deliever <span className = "text-blue-600">groceries</span><br/>
                    to your doorstep</h2>
                    <p>Get the freshest groceries delivered right to your home. Save time , skip the lines,<br/> 
                        and enjoy the convenience of quick, efficient delivery</p>
                    <button className = "border border-black self-start text-2xl px-4 py-1 my-8 rounded font-mono hover:bg-green-400 hover:border-green-600 hover:scale-105 ">Shop Now</button>
                </div>
                <div className = "w-[700px] self-center">
                    <img className = "object-cover p-2" src = {heroImage} alt="" />
                </div>
            </div>
         </div>
    )
}