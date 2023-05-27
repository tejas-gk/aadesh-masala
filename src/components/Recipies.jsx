import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recipies } from "../data/recipie";

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

            <Slider {...settings}>
                {recipies.map((recipe, index) => (
                    <div key={index}>
                        <a href={recipe.link} target="_blank" rel="noreferrer">
                            <img src={recipe.image} alt={recipe.title} className="w-[300px] h-[300px]" />
                            {recipe.title}
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}






