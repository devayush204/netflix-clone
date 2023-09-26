import React from 'react'

const page = () => {
    return (
        <section className='bg-[#141414] w-full h-[100vh] flex justify-center items-center '>
            <div className='flex flex-col items-center  '>
                <div className='text-white mb-8 '>
                    <p className='text-[55px] font-semibold font-sans '>Whos's watching?</p>
                </div>

                <div className='flex gap-8'>
                    <a className='flex flex-col justify-center items-center group gap-3' href="/home">
                        <img className='w-[150px] group-hover:border-[3px] group-hover:border-white rounded-md' src={"/profile1.png"} alt="" />
                        <p className='text-[20px] text-[#808080] group-hover:text-white font-semibold '>Zoro</p>
                    </a>
                    <a className='flex flex-col justify-center items-center group gap-3' href="/home">
                        <img className='w-[150px] group-hover:border-[3px] group-hover:border-white rounded-md' src={"/profile2.png"} alt="" />
                        <p className='text-[20px] text-[#808080] group-hover:text-white font-semibold '>Krsna</p>
                    </a>
                    <a className='flex flex-col justify-center items-center group gap-3' href="/home">
                        <img className='w-[150px] group-hover:border-[3px] group-hover:border-white rounded-md' src={"/profile3.png"} alt="" />
                        <p className='text-[20px] text-[#808080] group-hover:text-white font-semibold '>Yuji</p>
                    </a>
                    <a className='flex flex-col justify-center items-center group gap-3' href="/home">
                        <img className='w-[150px] group-hover:border-[3px] group-hover:border-white rounded-md' src={"/profile4.png"} alt="" />
                        <p className='text-[20px] text-[#808080] group-hover:text-white font-semibold '>Luffy</p>
                    </a>

                    <a className='flex flex-col justify-center items-center group gap-3 ' href="/">
                        <div className='w-[150px] h-[150px] flex items-center justify-center bg-transparent rounded-md group-hover:bg-white '>
                            <div className='w-[80px] h-[80px] rounded-full bg-[#808080] p-2'>
                                <svg className='fill-[#141414] group-hover:fill-white' version="1.1" id="Layer_1"
                                    viewBox="0 0 100 100" enable-background="new 0 0 100 100">
                                    <path d="M84.437,39.721l-24.164,0l0-24.158c0-1.001-0.812-1.812-1.812-1.813L41.536,13.75c-1.001,0-1.812,0.812-1.812,1.813
	l-0.001,24.16l-24.159-0.001c-0.961,0-1.812,0.851-1.813,1.813l0,16.925c-0.001,0.481,0.191,0.943,0.531,1.282
	c0.339,0.339,0.801,0.531,1.282,0.53h24.16v24.165c0,0.48,0.191,0.942,0.531,1.282c0.34,0.34,0.802,0.531,1.282,0.531L58.46,86.25
	c0.48,0,0.943-0.192,1.284-0.533c0.338-0.338,0.529-0.8,0.529-1.28V60.273l24.163-0.001c0.5,0,0.953-0.202,1.282-0.53
	c0.329-0.329,0.531-0.782,0.531-1.283l0.001-16.925C86.25,40.533,85.439,39.722,84.437,39.721z"/>
                                </svg>
                            </div>
                        </div>
                        <p className='text-[20px] text-[#808080] group-hover:text-white font-semibold '>Add profile</p>

                    </a>

                </div>

                <div className='mt-16'>
                    <button className='px-10 py-2 rounded-sm bg-transparent border-2 border-[#808080] text-[18px] font-semibold font-sans text-[#808080] hover:text-white hover:border-white ' >
                        Manage profiles
                    </button>
                </div>
            </div>
        </section>
    )
}

export default page
