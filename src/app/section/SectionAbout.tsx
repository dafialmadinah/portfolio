"use client"
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'
import RollingGallery from '../reactBits/RollingGallery/RollingGallery'
import Image from 'next/image';


export const SectionAbout = () => {
  const ref = useRef(null);
  const isiInView = useInView(ref, {
    once: false,
    amount: 0.3
  })

  return (

    <section className='min-h-screen w-full flex flex-col justify-center px-10 scroll-mt-20' id='about'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isiInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='text-center'
      >
        <div className='flex flex-row gap-x-15 bg-white/5 px-4 py-10 rounded-2xl '>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isiInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeIn' }}
            className='flex flex-row gap-x-10'>

            <div>
              <Image src="/dafi.jpeg" alt="desc" width={400} height={300} className='rounded-xl w-200' />
            </div>


            <div className='flex flex-col text-justify'>
              <h1 className='w-full text-center font-bold text-3xl hidden lg:block mb-8'>About Me</h1>
              <p>
                {`Hi! I am an Information Technology student at Brawijaya University with a strong passion for creating meaningful digital solutions. I have been involved in various projects such as developing a web app for the towing industry at CloudDatzen and designing a landing page for Halcy Hijab to enhance their online presence. These experiences have been valuable, but I realize that I still have a lot to learn.`}
              </p>
              <br />
              <p> 
                {`I believe my knowledge is still limited, especially in frontend development. That is why I am continuously learning and practicing HTML, CSS, JavaScript, and React. I enjoy the process of turning ideas into clean, user-friendly interfaces and am committed to improving my skills and growing as a frontend developer, one step at a time`}
                </p>
            </div>
          </motion.div>
        </div>
      </motion.div>


      <div>
        <RollingGallery autoplay={true} pauseOnHover={false} />
      </div>

    </section>
  )
}
