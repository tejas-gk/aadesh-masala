/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ data }) {
    return (
        <div>
            <Link to={`${data.link}`}>
                <img src={data.image} alt={data.title} className="w-[300px] h-[300px] rounded-lg" />
                
                <p className='text-red-500 first-letter:uppercase font-semibold text-lg'>
                {data.title}
                </p>
            </Link>
        </div>
    );
}
