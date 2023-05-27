import { images } from '../assets/images'
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
        <div className="flex items-center  bg-white">
            <img
                src={images.logo}
                alt='logo'
                className='h-24 w-24 ml-8'
            />
            <div className="ml-auto mr-8 hidden lg:block max-h-24">
                {
                    navItems.map((item, index) => {
                        return (
                            <div key={index} className='inline-block mx-2'>
                                <a href='/' className='txt relative text-[19px] font-bold cursor-pointer'>
                                    {item.name}
                                    <span className="underline bg-black"></span>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
