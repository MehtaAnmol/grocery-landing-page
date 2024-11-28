export default function Categories(){
    return(
        <div className = "relative m-4">
            <h3 className = "text-3xl font-mono font-bold py-2">Categories</h3>
            <div className = "flex gap-2 flex-wrap overflow-hidden">
                <CategoryCard title = "Fruits & Vegetables"/>
                <CategoryCard title = "Beverages"/>
                <CategoryCard title = "Eggs, Meats & Fish"/>
                <CategoryCard title = "Cleaning & Household"/>
                <CategoryCard title = "FoodGrains, Oils & Masala"/>
            </div>
            <button className = "absolute top-1 right-1 mr-4 mt-2 px-4 text-xl font-mono border border-black px-2 rounded hover:bg-green-400">All Categories</button>
        </div>
    )
}

function CategoryCard({title}){
    return(
        <a href = "#" className = "border border-black w-[250px] h-[300px] flex flex-1 justify-center hover:bg-green-400 rounded">
            <h4 className = "text-3xl font-mono py-10 px-2 self-center">{title}</h4>
        </a>
    )
}