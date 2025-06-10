'use client'
import React from 'react'
import SplitText from '../reactBits/SplitText/SplitText'
import TextPressure from '../reactBits/TextPressure/TextPressure'
import AnimatedContent from '../reactBits/AnimatedContent/AnimatedContent'


export const SectionHome = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center gap-x-20 scroll-mt-20'>
  
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.5}
      >
        <div className='flex flex-col gap-y-4'>
          <TextPressure
            text="Hello World!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#387eb8"
            minFontSize={34}
          />

          <SplitText
            text="I'm Muhammad Rizqullah Almadinah (Dafi)"
            className="text-xl font-semibold font-serif"
            delay={100}
            duration={0.8}
            ease="ease3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />


          <div className='flex flex-row gap-x-2'>
            <h1 className='text-[0.9rem] md:text-xl font-mono overflow-hidden'> Focused On : {'{'} </h1>
          </div>
            <span className='text-[0.9rem] md:text-xl font-mono border-r-2 pr-2 whitespace-nowrap overflow-hidden typing-effect '>Frontend Web Development {'}'}</span>

        </div>

        <div>

        </div>
      </AnimatedContent>

    </section>
  )
}
