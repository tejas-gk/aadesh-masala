import { images } from '../../data/images'

const navItems = [
    {
        name: 'Home',
    },
    {
        name: 'About',
    },
    {
        name: 'Products',
    },
    {
        name: "Gallery"
    },
    {
        name: "Recipies"
    },
    {
        name: "Contact"
    }
]

export default function Navbar() {
    return (
        <div className="relative bg-white">
            <div className="flex items-center group">
                <img
                    src={images.logo}
                    alt='logo'
                    className='h-24 w-24 ml-8'
                />
                <div className="ml-auto hidden mr-8 lg:block max-h-24">
                    {
                        navItems.map((item, index) => (
                            <div key={index} className='inline-block mx-2'>
                                <a href='/' className='txt relative text-[19px] font-bold cursor-pointer'>
                                    {item.name}
                                    <span className="underline-a bg-black"></span>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-0 bg-black transition-height duration-300 ease-in-out group-hover:h-4"></div>
        </div>
    )
}
