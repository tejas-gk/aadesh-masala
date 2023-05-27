import { images } from "../data/images";

export default function Info() {
    const items = [
        {
            src: images.natural,
            alt: 'a',
            className: 'bg-red-600',
            title: 'Natural',
            desc: 'Our spices are made from the finest natural ingredients, ensuring that you get the best flavors without any harmful additives.'
        },
        {
            src: images.healthy,
            alt: 'b',
            className: 'bg-red-500',
            title: 'Healthy',
            desc:'Our spices are not only delicious but also packed with health benefits, helping you lead a healthier lifestyle.'
        },
        {
            src: images.flavourlock,
            alt: 'b',
            className: 'bg-red-500 lg:bg-red-600',
            title: 'Flavour Lock',
            desc:'We use the latest techniques to lock in the flavor and aroma of our spices, so you can enjoy their freshness and goodness for longer.'
        },
        {
            src: images.pureveg,
            alt: 'b',
            className: 'bg-red-600 lg:bg-red-500',
            title: 'Pure Veg',
            desc:'Our spices are 100% pure and vegetarian, making them the perfect choice for anyone looking for a healthy and ethical food option.'
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${item.className} p-4 flex flex-col justify-center items-center`}
                >
                    <img src={item.src} alt={item.alt}
                    className="w-[90px] h-[93px] lg:h-[160px] lg:w-[160px]"
                    />
                    <div className="ml-4 text-center">
                        <h1 className="text-white text-[20px] font-bold">
                            {item.title}
                        </h1>
                        <p className="text-white text-[14px] font-semibold mx-4">
                            {item.desc}
                        </p>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}
