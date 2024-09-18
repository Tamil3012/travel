// import React from 'react'
import world from './../assets/image/sec2-1.png'
import bag from './../assets/image/sec2-2.png'
import ticket from './../assets/image/sec2-3.png'
import Dubai from './../assets/image/travel1.jpg'
import Malaysia from './../assets/image/travel2.jpg'
import Maldives from './../assets/image/travel3.jpg'
import hero from './../assets/image/hero.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <section className="bg-hero-bg ">
            <div className=" from-green-50 to-green-100">
                <section className="py-5">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div className='order-2 md:order-1'>
                                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                    Your Journey <span className="text-end text-main">Begins</span>
                                </h1>

                                <p className="mt-8 text-base text-black sm:text-xl ">Tourism is a gateway to exploring the world's diverse cultures, landscapes, and histories. It offers individuals the opportunity to step outside their everyday lives and experience the wonders of new destinations. </p>

                                <div className="mt-10 sm:flex  sm:items-center sm:space-x-8">
                                    <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-main hover:bg-hover-color focus:bg-hover-color" role="button"> Start exploring </a>
                                    <a href="#" title="" className="inline-flex items-center justify-center px-3 py-3 text-base font-bold text-black transition-all duration-200" role="button"> 
                                        <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Watch video
                                    </a>

                                    {/* <a href="#" title="" className="bg-sky-500 inline-flex items-center py-3 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                        <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Watch video
                                    </a> */}
                                </div>
                            </div>

                            <div className='order-1 md:order-2'>
                                <img className="w-full" src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <section className="py-5 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
                    <div className='flex flex-col justify-center'>
                        <h6 className=' text-start font-bold text-main'>small content</h6>
                        <h3 className="text-start py-3 text-5xl font-extrabold text-black">Top Values <br />For You</h3>
                        <p className="text-start text-sm font-bold text-gray-600">Travel is the only thing you buy that makes you richer.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                             <img src={world} alt="" />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-black">Lot of Choices</h3>
                        <p className="text-sm font-bold text-gray-600"><span className='font-extrabold'>170+</span> Travel Places to Inspire Your Next Adventure</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-main rounded-full">
                            <img src={bag} alt="" />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-black">Fast & Easy to Load</h3>
                        <p className="text-sm font-bold text-gray-600">Check out our kids travel essentials and customize your favorites with fun family photos from your last vacation.</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                            <img src={ticket} alt="" />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-black">Easy Booking</h3>
                        <p className="text-sm font-bold text-gray-600">Once you’re ready to fill the pages of a photo book with all your favorite vacation photos!</p>
                    </div>

                    
                </div>
            </div>
        </section>


        <section className=" bg-gray-50 py-5">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">View Our Tourism</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0 font-bold">We travel not to escape life, but for life not to escape us.</p>
                    </div>

                    
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                    <div className="overflow-hidden bg-white rounded shadow">
                        <div className="p-5">
                            <div className="relative">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full" src={Dubai} alt="" />
                                </a>

                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Dubai </span>
                                </div>
                            </div>
                            <p className="mt-5 font-semibold">
                                <a href="#" title="" className=" text-main hover:text-main">Vist</a>
                            </p>
                            
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white rounded shadow">
                        <div className="p-5">
                            <div className="relative">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full" src={Malaysia} alt="" />
                                </a>

                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Malaysia </span>
                                </div>
                            </div>
                            <p className="mt-5 font-semibold">
                                <a href="#" title="" className=" text-main hover:text-main">Vist</a>
                            </p>
                            
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white rounded shadow">
                        <div className="p-5">
                            <div className="relative">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full" src={Maldives} alt="" />
                                </a>

                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Maldives </span>
                                </div>
                            </div>
                            <p className="mt-5 font-semibold">
                                <a href="#" title="" className=" text-main hover:text-main">Vist</a>
                            </p>
                            
                        </div>
                    </div>
                    
                    
                </div>

                <div className='text-center mt-5'>
                        <NavLink exact to="/tours" className="text-center px-3 py-2 font-extrabold rounded-md text-main hover:text-main"> View More</NavLink>
                </div>

                
            </div>
        </section>


        <section className="py-5 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        
        <section className="py-10 bg-gray-50 ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                    <div className="relative mb-12">
                        <img className="w-full rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg" alt="" />

                        <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                            <div className="overflow-hidden bg-white rounded">
                                <div className="px-10 py-6">
                                    <div className="flex items-center">
                                        <p className="flex-shrink-0 text-3xl font-bold text-main sm:text-4xl">37%</p>
                                        <p className="pl-6 text-sm font-medium text-black sm:text-lg">High Conversions <br />on Landing Pages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                            <svg className="w-8 h-8 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Build a perfect team within hours.</h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.</p>
                        <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-main to-hover-color hover:opacity-80 focus:opacity-80" role="button"> Explore more </a>
                    </div>
                </div>
            </div>
        </section>


        <section className="py-5 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h4 className="text-xl font-medium text-gray-900">Numbers tell the hard works we’ve done in last 6 years</h4>
                </div>

                <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div className="px-4 py-6">
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 w-12 h-12 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <div className="ml-4">
                                    <h4 className="text-4xl font-bold text-gray-900">6+</h4>
                                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">Years in business</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div className="px-4 py-6">
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 w-12 h-12 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <div className="ml-4">
                                    <h4 className="text-4xl font-bold text-gray-900">37+</h4>
                                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">Team members</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div className="px-4 py-6">
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 w-12 h-12 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="ml-4">
                                    <h4 className="text-4xl font-bold text-gray-900">3,274</h4>
                                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">Projects delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div className="px-4 py-6">
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 w-12 h-12 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                    />
                                </svg>
                                <div className="ml-4">
                                    <h4 className="text-4xl font-bold text-gray-900">98%</h4>
                                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">Customer success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>






        


    </div>
  )
}

export default Home
