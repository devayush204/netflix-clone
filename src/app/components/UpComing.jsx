import React from 'react';
import { useGlobalContext } from '../utils/Context';
import Image from 'next/image';

const UpComing = () => {
    const { upcoming } = useGlobalContext();
    return (
        <div className='mt-8 pl-8'>
            <h1 className='text-3xl font-medium text-gray-300'>Upcoming Movies</h1>
            <div className='flex items-center gap-7 overflow-x-auto'>
                {upcoming.map((item, index) => (
                    <div key={item.id} className={` mt-5 flex-shrink-0 cursor-pointer  ${index === item.length - 1 ? '' : 'pr-8'}`}>
                        <Image className='w-[200px] h-[300px] relative rounded-md' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={300} height={300} alt='' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpComing