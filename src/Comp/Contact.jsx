// import React from 'react'
import { MdAddCall } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";



export const Contact = () => {
  return (
    <div>

    <section className="py-10 bg-gray-50 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                    <div className="overflow-hidden bg-white rounded-xl shadow-md">
                        <div className="p-6">
                            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <MdAddCall size={20}/>
                            </svg>
                            
                            <p className="mt-6 text-lg font-medium text-gray-900">+1-316-555-0116</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">+1-446-526-0117</p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white rounded-xl shadow-md">
                        <div className="p-6">
                            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <FaMailBulk size={20}/>
                            </svg>
                            <p className="mt-6 text-lg font-medium text-gray-900">contact@example.com</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">hr@example.com</p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white rounded-xl shadow-md">
                        <div className="p-6">
                            <svg className="flex-shrink-0 w-10 h-10 mx-auto text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <FaMapLocationDot size={20}/>
                            </svg>
                            <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">8502 Preston Rd. Ingle, Maine 98380, USA</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 overflow-hidden bg-white rounded-xl shadow-md">
                    <div className="px-6 py-12 sm:p-12">
                        <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                        <form action="#" method="POST" className="mt-14">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <label className="text-base font-medium text-gray-900"> Your name </label>
                                    <div className="mt-2.5 relative">
                                        <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900"> Email address </label>
                                    <div className="mt-2.5 relative">
                                        <input type="email" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900"> Phone number </label>
                                    <div className="mt-2.5 relative">
                                        <input type="tel" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900"> Company name </label>
                                    <div className="mt-2.5 relative">
                                        <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="text-base font-medium text-gray-900"> Message </label>
                                    <div className="mt-2.5 relative">
                                        <textarea name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-orange-600 caret-orange-600" rows="4"></textarea>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-main border border-transparent rounded-md focus:outline-none hover:bg-hover-color focus:bg-hover-color">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <div className="flex items-center justify-center">
                    <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" alt="" />
                    </div>

                    <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg" alt="" />
                    </div>

                    <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg" alt="" />
                    </div>
                </div>

                <h2 className="mt-2 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">Join <span className="border-b-8 border-mainlight">5,482</span> other Passengers</h2>
                <p className="max-w-xl mx-auto mt-3 text-xl text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>

                <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4  font-semibold text-white transition-all duration-200 bg-main border border-transparent rounded-md lg:mt-12 hover:bg-hover-color focus:bg-hover-color" role="button">
                    <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Get instant access
                </a>
            </div>
        </div>
    </section>


    <section className="bg-mainlight 2xl:bg-white">
    <div className="px-4 mx-auto overflow-hidden bg-mainlight max-w-7xl sm:px-6 lg:px-8">
        <div className="py-3 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Use mobile app for better performance</h2>
                    <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                        <a href="#" title="" className="flex" role="button">
                            <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
                        </a>

                        <a href="#" title="" className="flex" role="button">
                            <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div className="relative px-12">
                    <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    <img className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    </section>

  



    </div>
  )
}
