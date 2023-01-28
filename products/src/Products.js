import React,{useState} from 'react'
import data from './data';

export const Products = () => {
    const [product]=useState(data);
  return (
    <div>
        <h1 class=" text-center font-bold text-3xl m-4">Products</h1>
        <div class="flex flex-wrap w-4/5 mx-auto justify-between items-center">
            {
                product.map(el=>{
                    return(
                        <div key={el.id} class="bg-slate-600 h-96 w-56 m-8 text-white shadow-2xl">
                            <img class="h-80 w-56" src={el.image} alt={el.name}/>
                            <p class="p-2 text-sm font-bold">{el.name}</p>
                            <p class="p-2 text-sm">${el.price}</p>
                            </div>
                    )
                })}
            
        </div>
    </div>
  )
}
