import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    // bg-[url('/grid.svg')]
    <section className=" h-[500px] bg-[url('/grid.svg')]">
  <div className="mx-auto max-w-screen-xl z-30 px-4 pt-32 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       Create your Form
        <strong className="font-extrabold text-primary sm:block"> In Seconds Not  in Hours </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
      Generate, publish and share your form right away with AI. Dive into insightful results, charts and analytics.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/dashboard"
        >
          + Create AI Form
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  {/* <img src='/grid.svg' className=' absolute w-full h-[400px] '/> */}
<section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-56 ">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>

      <p className="mt-4 text-gray-300">
      Discover how FormGenius simplifies form creation. 
      Create custom forms effortlessly, gather valuable data, and streamline your workflow. 
      No coding needed! Start designing forms for surveys, registrations, and more with FormGenius.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Write promot for your form</h2>

        <p className="mt-1 text-sm text-gray-600">
        Craft compelling prompts effortlessly to guide form responses effectively with FormGenius
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Edit Your form </h2>

        <p className="mt-1 text-sm text-gray-600">
        Easily modify and refine your forms on-the-go with FormGenius's intuitive editing tools.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Share2 className='h-8 w-8' />

        <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>

        <p className="mt-1 text-sm text-gray-600">
        Share your forms seamlessly and begin collecting responses instantly with FormGenius
        </p>
      </a>

    
    </div>

    <div className="mt-12 text-center">
      <a
        href="/sign-in"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
  </div>
</section>

<footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
        <Image src={'/logo.png'} width={45} height={25} alt='FormGenius logo' className="mr-4" />
          <div>
            <p className="text-lg font-semibold">FormGenius</p>
            <p className="text-sm">Create custom forms effortlessly.</p>
          </div>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 mr-12">Privacy Policy</a> 
          <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>

</section>

  )
}

export default Hero