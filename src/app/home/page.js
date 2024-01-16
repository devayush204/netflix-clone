'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import thumbnail from '../../../public/landingpagebg.jpg';
import { Info, Play, Volume2, VolumeX } from 'lucide-react';
import Toprated from '../components/TopRated';
import Popular from '../components/Popular';

const Home = () => {

  const [mute, setmute] = useState(false)


  return (
    <div className='h-full bg-[#141414] pb-8'>
      <div className='relative'>
        <Navbar />
        <div className='relative'>

          <video
            autoPlay
            muted
            playsInline
            poster={thumbnail}
            className='h-[85vh] w-screen object-cover'
          >
            <source src='/header.mp4' type='video/mp4' />
          </video>
          <div className='absolute top-[45%] px-8'>
            <h1 className='text-white uppercase font-semibold text-7xl tracking-widest'>Everest</h1>
          </div>
          <div className='absolute top-[60%] px-8 flex items-center gap-5'>
            <button className='bg-white hover:bg-[#ffffffb3] text-black flex items-center justify-center gap-2 p-3 px-8 rounded-md text-2xl font-medium'><Play className='text-black fill-black' /> Play</button>
            <button className='bg-[#545453a6] hover:bg-[#545453cf] text-white flex items-center justify-center gap-2 p-3 px-8 rounded-md text-2xl font-medium'><Info /> More Info</button>
          </div>
          <div className='absolute top-[60%]  right-0 flex items-center gap-2'>
            <div className='h-[60px] w-[60px] rounded-full border border-white flex items-center justify-center cursor-pointer' onClick={() => setmute(!mute)}>
              {mute ? <VolumeX className='text-white h-[35px] w-[35px]' /> : <Volume2 className='text-white h-[35px] w-[35px]' />}
            </div>
            <div className='bg-[#545453a6] border-l-2 border-white p-3 pr-12'>
              <h5 className='text-white font-semibold text-xl'>U/A 13+</h5>
            </div>
          </div>
        </div>
        <div className='absolute bottom-[-130px] pl-8'>
          <h1 className='text-3xl font-medium text-gray-300'>Top rated movies</h1>
          <div className='w-full'>
            <Toprated />
          </div>
        </div>
      </div>
      <div className=''>
        <Popular />
      </div>

    </div>
  );
};

export default Home;
