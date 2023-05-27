import Slider from "react-slick";
import { images } from "../assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const recipies = [
    {
        image: images.recepie1,
        title: "Beef and Mustard Pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie2,
        title: "Beef and Oyster pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie3,
        title: "Beef and Pickle pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie4,
        title: "Steak and Kidney pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie5,
        title: "Steak and Onion pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie6,
        title: "Steak and Mushroom pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie7,
        title: "Steak and Ale pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie8,
        title: "Chicken and Mushroom pie",
        link: "https://www.themealdb.com/meal/52959"
    },
    {
        image: images.recepie9,
        title: "Chicken and Leek pie",
        link: "https://www.themealdb.com/meal/52959"
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
        <Slider {...settings}>
            {recipies.map((recipe, index) => (
                <div key={index}>
                    <a href={recipe.link} target="_blank" rel="noreferrer">{recipe.title}</a>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            ))}
        </Slider>
    );
}






