import React, { useState } from 'react'

const Card = ({hd, para}) => {
 
const [heading,setHd] = useState("Hello");

function clicked()
{
setHd("Submitted");
}

  return (
    <>
    
<a href="" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/8070364/pexels-photo-8070364.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{hd}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{para}</p>
    </div>
</a>
<h2>{heading}</h2>

<button onClick={clicked} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>

    </>
  )
}

export default Card