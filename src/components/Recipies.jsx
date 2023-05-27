import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recipies } from "../data/recipie";
import Card from "./common/Card";

export default function Recipies() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        ]
    };

    return (
        <div className="mt-8 ">


            <div className="relative w-fit text-center mx-auto mb-9 mt-4">
                <div className='txt cursor-pointer mx-auto text-3xl text-red-500 font-bold'>
                    Spice Up Your Meals with Aadesh Masale
                    <span className="underline bg-red-500"></span>
                </div>
            </div>



            <Slider {...settings}>
                {recipies.map((recipe, index) => (
                    <div key={index}>
                        <Card data={recipe}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}






