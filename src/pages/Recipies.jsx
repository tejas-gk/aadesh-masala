import React from 'react'
import { useParams } from 'react-router-dom';
import { recipies } from '../data/recipie';
export default function Recipies() {
    const { id } = useParams();
    console.log(id);
  return (
      <div className='mt-28'>
            <h1>{recipies[id].title}</h1>

    </div>
  )
}
