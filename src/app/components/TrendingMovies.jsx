import React from 'react'
import { useGlobalContext } from '../utils/Context'
import Image from 'next/image'

const TrendingMovies = () => {
    const { Trending } = useGlobalContext()
    return (
        <div className='mt-8 pl-8 '>
            <h1 className='text-3xl font-medium text-gray-300'>Top 10 Movies In India</h1>
            <div className='flex items-center gap-20 overflow-x-auto mt-6'>
                {Trending.map((item, index) => (
                    <div key={item.id} className={`relative pl-20  ${index !== Trending.length - 1 ? 'pr-10' : 'pr-8'}`}>
                        <div className='relative w-[200px] h-[300px] rounded-md '>
                            <div className='z-10 absolute'>
                                <Image
                                    className='object-cover w-full h-full z-20  rounded-sm'
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    width={300}
                                    height={300}
                                    alt=''
                                />
                            </div>
                            <div className='absolute z-[1] inset-0 h-[300px]  overflow-hidden  flex items-center justify-center top-0 left-[-250px]'>
                                <h1 className='text-white font-extrabold text-[280px] tracking-tighter p-4 stroketext'>
                                    {index + 1}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingMovies