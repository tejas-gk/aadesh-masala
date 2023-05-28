import { useParams } from 'react-router-dom';
import { recipies } from '../data/recipie';
export default function Recipies() {
    const { id } = useParams();
    console.log(recipies[id], parseInt(id) + 1)
    return (
        <div className='mt-28'>
            <img src='https://aadhesh-final.vercel.app/recipes/bgimgs/3.jpg' alt='banner' className="w-full h-full  object-contain" />
           
            <div className='bg-gray-200 mx-5 p-3 mt-5 relative'>

                <h1 className='
            text-3xl
            font-bold
            mt-5
            '>Let&apos;s make {recipies[id].title}</h1>
                <div className="txt cursor-pointer font-bold relative w-fit mt-5">
                    Ingredients
                    <span className="underline-a bg-black"></span>
                </div>
                {
                    recipies[id].ingredients.map((ingredient, index) => (
                        <div key={index} className='
                  mt-5
                  '>
                            {ingredient}
                        </div>
                    ))

                }
            </div>


            <div className='flex justify-between mt-9'>

                {
                    recipies[id - 1] != null ?
                        <div className='
                    mx-5 
                    '>
                            <a href={`/recipies/${id - 1}`} className='flex items-center
'>
                            <img src={recipies[id - 1].image} alt={recipies[id - 1].title} className="w-16 h-16 rounded-full mx-5  object-cover" />
                            <div>
                                <h2 className='text-gray-400 text-lg font-semibold'>Previous Recipie</h2>
                                <h3 className='font-bold first-letter:uppercase'>
                                    {recipies[id - 1].title}
                                </h3>
                                </div>
                            </a>
                        </div>
                        : null
                }

                {
                    recipies[parseInt(id) + 1] != null ?
                        <div className='
                mx-5
                '>
                            <a href={`/recipies/${parseInt(id) + 1}`} className='flex items-center flex-row-reverse'>
                                
                            <img src={recipies[parseInt(id) + 1].image} alt={recipies[parseInt(id) + 1].title} className="w-16 h-16 rounded-full mx-5  object-cover" />
                            <div>
                                <h2 className='text-gray-400 text-lg font-semibold'>Next Recipie</h2>
                                <h3 className='font-bold first-letter:uppercase'>
                                    {recipies[parseInt(id) + 1].title}
                                </h3>
                            </div>
                            </a>
                        </div>
                        : null

                }
            </div>
        </div>
    )
}
