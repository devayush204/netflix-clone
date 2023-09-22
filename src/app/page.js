"use client"

import { useState } from "react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="bg-[#2D2D2D] ">
      {/* top content */}
      <section className="w-full mb-2 relative h-[93vh] overflow-hidden bg-black">
        <img className=" h-[15h] scale-x-125 opacity-30 " src={"/landingpagebg.jpg"} alt="" />

        <div className="absolute w-[80%] left-[10%] top-[3%] flex flex-col justify-center items-center">
          <div className="flex justify-between w-full">
            <svg className='w-[170px] fill-red-600  ' viewBox="0 0 111 30" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
            <div className="flex items-center justify-center gap-4">
              <div className=' left-[5px]  cursor-pointer '>

                <button className='flex items-center bg-black bg-opacity-60 py-2 px-3 border-zinc-600 border-[1px] focus:outline-white rounded-sm' onClick={toggleDropdown} onBlur={() => { setIsOpen(false) }}>
                  <svg className='w-[20px]  fill-white ' viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                      fill="white"
                    />
                  </svg>
                  <p className='ml-3 text-[15px] text-zinc-500 '>English</p>
                  <svg className='w-[15px] ml-1 fill-zinc-500 ' viewBox="0 -6 524 524"  ><path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" /></svg>

                </button>
                {/* dropdown  */}
                {isOpen && (
                  <div className='absolute w-[128px] top-[43px] text-[13px] text-zinc-500 bg-black rounded-lg list-none border-[1px] border-zinc-800 '>
                    <li className='hover:bg-blue-600 hover:text-white pl-10 rounded-t-lg'>English</li>
                    <li className='hover:bg-blue-600 hover:text-white pl-10 rounded-b-lg '>हिन्दी</li>
                  </div>
                )}


              </div>
              <div>
                <a href="/login">
                <button className="bg-red-600 rounded-md text-white text-[14px] tracking-wide font-semibold px-7 py-2  ">Sign in</button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 text-white mt-[180px] ">
            <p className="text-[50px] font-extrabold font-sans  ">Unlimited movies, TV shows and more</p>
            <p className="text-[25px] font-sans  ">Watch anywhere. Cancel anytime.</p>
            <p className="text-[23px] font-sans  ">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex gap-3 mt-5 ">
              <input className="py-3 pl-6 w-[400px] border-[1px] border-zinc-400 bg-white bg-opacity-5 rounded-md focus:outline-none placeholder:text-[15px] placeholder:text-zinc-400" placeholder="Email address" type="text" />
              <button className="bg-red-600 text-[20px] font-semibold text-white py-3 px-10 rounded-md '">Get Started  </button>
            </div>
          </div>

        </div>
      </section>

      {/* enjoy on tv */}
      <section className="bg-black w-full py-12">
        <div className="flex justify-center items-center gap-5 ">
          <div className="flex flex-col mt-10 gap-5 text-white">
            <p className="text-[50px] font-extrabold font-sans ">Enjoy on your TV</p>
            <p className="text-[23px]  ">Watch on smart TVs, PlayStation, Xbox, Chromecast,<br /> Apple TV, Blu-ray players and more.</p>
          </div>
          <img className="w-[600px] z-[2]" src={"/tv.png"} alt="" />

          <video className="w-[450px] absolute left-[835px] z-[1]" src={"/tv-video.m4v"} loop muted ></video>

        </div>
      </section>

      {/* mobile view  */}
      <section className="bg-black w-full py-10 pb-16 mt-2">
        <div className="flex justify-center items-center">
          <div className="relative">
            <img className="w-[600px] h-[450px] " src={"/mobile-section.jpg"} alt="" />
            <div className="absolute bottom-[40px] left-[133px] flex items-center w-[330px] bg-black p-2 border-2 border-zinc-500 rounded-xl ">
              <img className="w-[60px] mr-5" src={"/mobile-box.png"} alt="" />
              <span className="flex flex-col  text-[15px]">
                <p className="text-white">Stranger Things</p>
                <p className="text-blue-600">Downloading...</p>
              </span>
              <img className="w-[50px] h-[50px] ml-16" src={"/download-gif.gif"} alt="" />
            </div>

          </div>

          <div className="flex flex-col text-white gap-4">
            <p className="text-[50px] font-extrabold font-sans ">Download your shows <br /> to watch offline</p>
            <p className="text-[25px] leading-6 font-sans ">Save your favourites easily and always have <br /> something to watch.</p>
          </div>
        </div>

      </section>

      {/* mac section  */}
      <section className="bg-black w-full py-12 mt-2">
        <div className="flex gap-5 justify-center items-center relative">
          <div className="flex flex-col text-white gap-4">
            <p className="text-[50px] font-extrabold font-sans ">Watch everywhere</p>
            <p className="text-[25px] leading-7 font-sans ">Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV..</p>
          </div>
          
            <img className="z-[2] " src={"/mac-section.png"} alt="" />
            <video className="absolute w-[400px] bottom-[200px] right-[290px] z-[1] " autoPlay muted loop src={"/mac-video.m4v"}></video>
         
        </div>
      </section>

      {/* watch evrywhere  */}
      <section className="bg-black w-full py-12 mt-2 ">
        <div className="flex gap-5 justify-center items-center">
          <img className="w-[550px]" src={"/kids-section.png"} alt="" />
          <div className="flex flex-col text-white gap-4">
            <p className="text-[50px] font-extrabold font-sans ">Create profiles for kids</p>
            <p className="text-[25px] leading-7 font-sans ">Send children on adventures with their favourite <br /> characters in a space made just for them—free with <br /> your membership.</p>
          </div>
        </div>
      </section>
    </section>
  )
}
