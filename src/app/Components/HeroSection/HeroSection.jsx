"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='col-span-7 place-self-center text-center sm:text-left jusselst\'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
                        Hello, I&apos;m{" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Ahmed Abbas',
                            1000,
                            'Web Developer',
                            1000,
                            'React Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        
                        repeat={Infinity}
                    />

                </h1>
                
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                loves to code more, I&apos;m currently looking for new opportunities.     
                               
                </p>
                <div>
                    <a href="#contact">
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button></a>
                    <a href="images/Ahmed_Mohammed_CV.pdf" download>
                        
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </a>
                    
    
                </div>   
            </motion.div> 
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className=' w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image src="/images/hero.png"
                alt='hero image'
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={400}
                height={400}
                />
                </div>
                
                        
            </motion.div>
        </div> 
    </section>
    
  )
}

export default HeroSection