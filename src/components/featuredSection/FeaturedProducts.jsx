
import featuredItems from "../../featuredItems"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function FeaturedProducts(){
    return(
       <div className = 'flex justify-center'>
            <div className = "m-4 py-4 w-3/4 ">
                <h2 className = "text-3xl font-mono font-bold p-2">Popular Items</h2>
                <div className = "flex flex-wrap gap-2 mx-2 ">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 1
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    >
                    {
                        featuredItems.map(item => 
                            <ItemsCard key = {item.id} item = {item}/>
                        )
                    }
                    </Carousel>
                </div>
            </div>
       </div>
    )
}

function ItemsCard({item}){
    return(
        <a href = "#" className = "hover:bg-green-400  border border-black rounded w-fit flex gap-4 flex-col justify-center items-center p-2 shrink-0">
            <h3 className = "text-3xl font-mono">{item.title}</h3>
            <p className = "text-2xl font-mono">₹40</p>
            <img className = " w-[250px] h-[200px] hover:scale-105" src = {item.src} alt="" />
        </a>
    )
}
