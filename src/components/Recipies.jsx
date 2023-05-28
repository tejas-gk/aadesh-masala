import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recipies } from "../data/recipie";
import Card from "./common/Card";
import { images } from "../data/images";

export default function Recipies() {

    const PrevArrow = (props) => (
        <button {...props} className="slick-prev" aria-label="Previous">
            <img src={images.leftArrow} alt="Previous" className="ml-20  h-12 w-12 z-[500]" />
        </button>
    );

    const NextArrow = (props) => (
        <button {...props} className="slick-next" aria-label="Next">
            <img src={images.rightArrow1} alt="Next" className="mr-28  h-12 w-12" />
        </button>
    );
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };


    return (
        <div className="mt-8">
            <div className="relative w-fit text-center mx-auto mb-9 mt-4">
                <div className="txt cursor-pointer mx-auto text-3xl text-red-500 font-bold">
                    Spice Up Your Meals with Aadesh Masale
                    <span className="underline-a bg-red-500"></span>
                </div>
            </div>

            <Slider {...settings}>
                {recipies.map((recipe, index) => (
                    <div key={index}>
                        <Card data={recipe} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
