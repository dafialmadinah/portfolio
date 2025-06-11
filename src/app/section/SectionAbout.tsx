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
              <Image src="/dafi.jpeg" alt="desc" width={400} height={300} className='rounded-xl w-300' />
            </div>


            <div className='flex flex-col text-justify'>
              <h1 className='w-full text-center font-bold text-3xl hidden lg:bloc mb-8'>About Me</h1>
              <p>
                {`Hi! I'm an Information Technology student at Brawijaya University with a passion for building meaningful digital solutions. Throughout my journey, I've earned recognition in tech and business competitions and gained hands on experience in both web and mobile development. At CloudDatzen, I helped develop a web app to support the towing industry, and at Halcy Hijab, I designed a clean, user friendly landing page to strengthen their online presence and engagement.`}
              </p>
              <br />
              <p> 
                {`Beyond technical roles, I've contributed to impactful community focused projects such as developing Ngalaman and SIGMA, mobile apps aimed at improving emergency response and public safety. I also led public relations initiatives at Raion Academy, connecting with over 200 participants in just one week. While I've explored various tech domains, my current focus is frontend development, where I enjoy turning ideas into intuitive interfaces that truly solve user needs.`}
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
