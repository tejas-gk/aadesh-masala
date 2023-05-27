import Slider from "react-slick";
import { images } from "../assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const recipies = [
    {
        image: images.recepie1,
        title: "Beef and Mustard Pie",
        link: "/recipies/1"
    },
    {
        image: images.recepie2,
        title: "Beef and Oyster pie",
        link: "/recipies/2"
    },
    {
        image: images.recepie3,
        title: "Beef and Pickle pie",
        link: "/recipies/3"
    },
    {
        image: images.recepie4,
        title: "Steak and Kidney pie",
        link: "/recipies/4"
    },
    {
        image: images.recepie5,
        title: "Steak and Onion pie",
        link: "/recipies/5"
    },
    {
        image: images.recepie6,
        title: "Steak and Mushroom pie",
        link: "/recipies/6"
    },
    {
        image: images.recepie7,
        title: "Steak and Ale pie",
        link: "/recipies/7"
    },
    {
        image: images.recepie8,
        title: "Chicken and Mushroom pie",
        link: "/recipies/8"
    },
    {
        image: images.recepie9,
        title: "Chicken and Leek pie",
        link: "/recipies/9"
    }
]
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
        <div className="mt-8">

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






