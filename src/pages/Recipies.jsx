import { useParams } from 'react-router-dom';
import { recipies } from '../data/recipie';
export default function Recipies() {
    const { id } = useParams();
    return (
        <div className='mt-28'>
            <img src={recipies[id].image} alt={recipies[id].title} className="w-full h-96 rounded-lg mx-5  mr-16 object-cover" />
            <div className='bg-gray-200 mx-5 p-3 mt-5 '>

                <h1 className='
            text-3xl
            font-bold
            mt-5
            '>Let&apos;s make {recipies[id].title}</h1>

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
        </div>
    )
}
