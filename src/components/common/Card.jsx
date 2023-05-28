/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function Card({ data }) {
    return (
        <div className=''>
            <Link to={`${data.link}`}>
                <div
                    className='w-[300px] h-[300px] overflow-hidden relative rounded-lg'
                >
                    <img
                        src={data.image}
                        alt={data.title}
                        className="hover:scale-105 w-full h-full object-cover transition-all duration-300 ease-in-out"
                    />
                </div>

                <p className='text-red-500 first-letter:uppercase font-semibold text-lg'>
                    {data.title}
                </p>
            </Link>
        </div>
    );
}
