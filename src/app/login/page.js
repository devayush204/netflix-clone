"use client"
import React, { useState } from 'react'
import "./style.css"

const Page = () => {
  // these are the language  dropdown 
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-[url("/login-bg.jpg")] relative bg-cover h-[140vh] box px-16 py-6'>
        
        <div className='mb-4'>
          <svg className='w-[170px] fill-red-600  ' viewBox="0 0 111 30" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
        </div>


        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col px-[80px] rounded-lg bg-black bg-opacity-90 w-[480px] pt-14 pb-[120px]'>

            <p className='text-white text-[30px] font-semibold mb-7'>Sign In</p>

            <div className='flex flex-col gap-4 mb-9'>
              <div className='relative flex text-zinc-400 w-full '>
                <input className='w-full pt-6 pb-1 px-6 font-sm bg-[#333333] focus:outline-none rounded-lg' type="text" />
                <label className='text-[10px]  top-2 absolute left-6 ' htmlFor="name">Email or phone number</label>
              </div>

              <div className='relative flex text-zinc-400 w-full '>
                <input className='w-full pt-6 pb-1 px-6 font-sm bg-[#333333] focus:outline-none rounded-lg' type="password" />
                <label className='text-[10px]  top-2 absolute left-6 ' htmlFor="name">Enter your password</label>
              </div>
            </div>

            <div className=''>
              <a className='w-full ' href="/watching">
                <button className='w-full py-3 bg-red-600 rounded-md text-white  font-semibold text-[15px] font-sans tracking-wider'>
                  Sign In
                </button>
              </a>

              <div className='flex mt-4 justify-between '>
                <div className='flex justify-center items-center gap-1'>
                  <input type="checkbox" name="remember me" className='w-[13px] h-[13px] ' />
                  <p className='text-zinc-500 text-[12px]'>Remember me</p>
                </div>

                <a href="/">
                  <p className='text-[12px] text-zinc-500 hover:text-white hover:underline '>Need help?</p>
                </a>
              </div>
            </div>

            <div className='mt-16'>
              <div className=' flex gap-2 '>
                <p className='text-[15px] text-zinc-500'>New to Netflix?</p>
                <a className=' ' href="/">
                  <p className='text-[15px] hover:underline text-white'>Sign up now.</p>
                </a>
              </div>
              <p className=' text-[12px] text-zinc-500 mt-3 leading-4 '>This page is protected by Google reCAPTCHA to ensure you're not a bot.  </p>
            </div>


          </div>
        </div>

        {/* footer  */}
        <div className='w-full absolute left-0 bottom-0 bg-black bg-opacity-90 pt-6 pb-12 '>
          <div className='flex flex-col ml-[300px] gap-4'>
            <div className='flex gap-1 text-[16px] text-zinc-500'>
              <p>Questions? Call</p>
              <p className='hover:underline cursor-pointer'>  000-800-919-1694</p>
            </div>
            <table className="w-[70%] text-[13px] border-collapse text-zinc-500">
              <tbody>
                <tr>
                  <td className="hover:underline cursor-pointer py-2">Faq</td>
                  <td className="hover:underline cursor-pointer py-2">Help Center</td>
                  <td className="hover:underline cursor-pointer py-2 ">Terms of Use</td>
                  <td className="hover:underline cursor-pointer py-2">Privacy</td>
                </tr>
                <tr>
                  <td className="hover:underline cursor-pointer py-2">Cookie Preferences</td>
                  <td className="hover:underline cursor-pointer py-2">Corporate Information</td>
                </tr>
              </tbody>
            </table>

            <div className=' left-[5px]  cursor-pointer'>

              <button className='flex items-center bg-black py-3 px-4 border-zinc-600 border-[1px] focus:border-white rounded-sm' onClick={toggleDropdown} onBlur={() => { setIsOpen(false) }}>
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
                <p className='ml-3 text-[13px] text-zinc-500 '>English</p>
                <svg className='w-[15px] ml-1 fill-zinc-500 ' viewBox="0 -6 524 524"  ><path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" /></svg>

              </button>
              {/* dropdown  */}
              {isOpen && (
                <div className='absolute w-[128px] bottom-[7px] text-[13px] text-zinc-500 bg-black rounded-lg list-none border-[1px] border-zinc-800 '>
                  <li className='hover:bg-blue-600 hover:text-white pl-10 rounded-t-lg'>English</li>
                  <li className='hover:bg-blue-600 hover:text-white pl-10 rounded-b-lg '>हिन्दी</li>
                </div>
              )}


            </div>


          </div>

        </div>

      </div>
    </>
  )
}

export default Page
