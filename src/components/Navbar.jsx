import logo from "../assets/logo.png"

export default function NavBar(){
    return(
        <nav className = "flex gap-2 justify-between px-2 py-4 font-mono items-center mx-2  max-w-screen-2xl">
            <div className = "flex px-2  shrink-0">
                <a href="#" className = " flex">
                <img className = "w-10" src = {logo} alt = "logo" />
                <p className = "self-center text-3xl font-bold">Grocery</p>
                </a>
            </div>
            <input className = "border border-solid border-black rounded-xl px-2 py-1 text-xl w-2/4"  type="text" placeholder = "Search for Products" />
            <ul className = "hidden md:flex gap-4 text-xl px-2">
                <li className = "hover:bg-green-400 border border-[#A8CD89] hover:border hover:border-green-600 rounded px-2 py-1 cursor-pointer"><a href="#">Home</a></li>
                <li className = "hover:bg-green-400 border border-[#A8CD89] hover:border hover:border-green-600 rounded px-2 py-1 cursor-pointer"><a href="#">Services</a></li>
                <li className = "hover:bg-green-400 border border-[#A8CD89] hover:border hover:border-green-600 rounded px-2 py-1 cursor-pointer"><a href="#">Categories</a></li>
                <li className = "hover:bg-green-400 border border-[#A8CD89] hover:border hover:border-green-600 rounded px-2 py-1 cursor-pointer"><a href="#">Cart</a></li>
            </ul>
        </nav>
    )
}