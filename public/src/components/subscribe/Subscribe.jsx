import React from 'react'
import '../../assets/css/global.css'

const Subscribe = () => {
    return (

        <div className="container mx-auto h-[565px] mt-[40px] bg-white flex justify-center items-center  rounded-lg regular-shadow bg-repeat  bg-[url('https://todblobstore.blob.core.windows.net/img-new-cdn/icons/TOD-icon.png')] columns-2">

            <div className="w-full aspect-video items-start justify-center flex flex-col px-[103px] ">
                <h3 className=" sf-display text-[46px] font-bold pr-[20%]  leading-[56px]">
                    Deals and travel inspiration
                </h3>
                <p className='text-[24px] mt-4 '>
                    Weekly in your inbox, daily in your feed
                </p>
                <div className=' flex  flex-row space-x-2 mt-[20px] '>
                    <input type="text" placeholder='Enter your email address' className='rounded-lg w-[320px] h-[48px]  border-2 border-gray-400/50  focus:outline-none focus:border-gray-400/50 focus:ring-0 ' />
                    <input type="button" className='btn-submit rounded-lg w-[116px] h-[45px] mt-[2px]  hover:bg-[#d96a24] cursor-pointer ' value="Sign up" />
                </div>
                <p className=' text-gray-500 text-[14px] mt-[16px] leading-[28px] '>
                    Our <a href="" className='underline'>Privacy Policy</a>
                </p>
                <div className='flex flex-row mt-[31px] space-x-5 '>
                    <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/facebook.png"  className='w-[40px] h-[39px]' />
                    <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/instagram.png"  className='w-[40px] h-[39px]' />
                    <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/x.png"  className='w-[40px] h-[39px]' />
                    <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/youtube.png " className='w-[40px] h-[39px]' />

                </div>
                
            </div>

            <div className='w-full aspect-video flex justify-center items-center'>

              <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Tod-Made.png" alt="" className='h-[500px] ' />
            </div>

        </div>
    )
}

export default Subscribe
