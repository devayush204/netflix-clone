import React from 'react'
import { useGlobalContext } from '../utils/Context'
import Image from 'next/image'

const NowPlaying = () => {

    const { NowPlaying } = useGlobalContext()
    return (
        <div className=' gap-4 overflow-x-auto mt-8 pl-8 flex flex-col '>
            <h1 className='text-3xl font-medium text-gray-300'>Continue watching</h1>
            <div className='flex items-center gap-8 overflow-x-auto'>
                {
                    NowPlaying.map((item, index) => {
                        const randomnumber = Math.floor(Math.random() * 100)
                        return (
                            <>
                                <div key={item.id} className={`flex-shrink-0 cursor-pointer flex flex-col gap-3  ${index === item.length - 1 ? '' : 'pr-8'}`}>
                                    <Image className='w-[200px] h-[300px] relative rounded-md' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={300} height={300} alt='' />
                                    <div class="w-full bg-gray-200 rounded-full h-[4px] mb-4 dark:bg-gray-700">
                                        <div class="bg-red-600 h-[4px] rounded-full dark:bg-red-500"
                                            style={{ "width": randomnumber }}></div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NowPlaying