import React from 'react'
import { useGlobalContext } from '../utils/Context'
import Image from 'next/image'

const Toprated = () => {
    const { TopRatedMovies } = useGlobalContext()

    return (
        <div className='flex items-center gap-4  overflow-x-auto mt-3'>
            {
                TopRatedMovies.map((item, index) => {
                    return (
                        <div key={item.id} className={`flex-shrink-0 cursor-pointer  ${index === item.length - 1 ? '' : 'pr-8'}`}>
                            <Image className='w-[200px] h-[300px] relative rounded-md' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={300} height={300} alt='' />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Toprated