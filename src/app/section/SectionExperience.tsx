'use client'
import { motion } from 'framer-motion'
import React from 'react'
import BounceCards from '../reactBits/BounceCards/BounceCards'


const images = [
  "/hekpes1.jpg",
  "/tobutive1.jpg",
  "/hekpes2.jpg",
  "/tobutive2.jpg",
  "/hekpes3.jpg"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

const images2 = [
  "/o1.jpg",
  "/o2.jpg",
  "/o3.jpg",
  "/o4.jpg",
  "/o5.jpg"
];


const w_experiences = [
  {
    title: 'Frontend Developer · Halcy Hijab',
    place: 'Jan 2025 - June 2025',
    description:
      'A national competition organized by the Information Systems Student Association. The event aims to enhance student portfolios and foster innovation.',
  },
  {
    title: 'Web Developer · CloudDatzen',
    place: 'Feb 2025 - May 2025',
    description:
      'Designed and developed a landing page for Halcy Hijab, a modest fashion brand, to enhance its online presence, showcase product highlights, and drive customer engagement through a clean, user-friendly interface.',
  },
];
const o_experiences = [
  {
    title: 'App Programmer · Raion Community',
    place: 'Jan 2025 - December 2025',
    description:
      'Developed "Ngalaman", a mobile application that enables users to quickly report criminal incidents, share information about high risk areas, and access emergency assistance through integration with authorities.',
  },
  {
    title: 'Lead Developer [Sigma] · Raion Community',
    place: 'May 2025 - July 2025',
    description:
      'Appointed as Lead Developer of SIGMA, a mobile app that strengthens emergency preparedness and response in Malang through real time alerts and practical safety features.',
  },
  {
    title: 'Vice Head of Public Relations · Raion Community',
    place: 'Nov 2024',
    description:
      'Designed and developed a landing page for Halcy Hijab, a modest fashion brand, to enhance its online presence, showcase product highlights, and drive customer engagement through a clean, user-friendly interface.',
  },
];

const awards = [
  {
    title: '2nd Place Hackfest x SSG',
    place: '2024 · Universitas Ciputra',
    description:
      '5 days of bootcamp and hackathon between student teams from universities to compete with each other in creating business ideas and applications/websites based on certain problems.'
  },
  {
    title: '2nd Place in Business Case Competition',
    place: '2024 · IT FEST Universitas Brawijaya',
    description:
      'IT FEST 2024 is a national competition organized by the Information Systems Student Association, themed "Computational Creativity for Sustainable Technology Empowerment." It features two main branches: UI/UX and Business Case. The event aims to enhance student portfolios and foster collaboration and innovation.'
  },
  {
    title: '1st Place in Business Model Canvas Competition',
    place: '2024 · Tobutive Universitas Brawijaya',
    description:
      'Tourism Business Creative is a program that empowers youth to develop tourism business ideas through a guided Business Model Canvas (BMC) competition, aiming to produce innovative and implementable solutions.'
  }
]
export const SectionExperience = () => {


  return (
    <section id='experience' className='min-h-screen scroll-mt-20 '>

      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          {w_experiences.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ amount: 0.2, once: false }}
            >
              <div className='border-l-4 border-blue-500 mt-10'>
                <div className='ml-6'>
                  <h4 className='font-bold text-lg'>{w.title}</h4>
                  <p className='text-sm text-gray-500'>{w.place}</p>
                  <p className=' text-justify'>{w.description}.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <h2 className="text-3xl font-bold text-center mb-8 mt-16">Organizational Experience</h2>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          {o_experiences.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ amount: 0.2, once: false }}
            >
              <div className='border-l-4 border-blue-500 mt-10'>
                <div className='ml-6'>
                  <h4 className='font-bold text-lg'>{o.title}</h4>
                  <p className='text-sm text-gray-500'>{o.place}</p>
                  <p className=' text-justify'>{o.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='hidden lg:block'>
          <BounceCards
            className="custom-bounceCards"
            images={images2}
            containerWidth={600}
            containerHeight={500}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>

      </div>

      <h2 className="text-3xl font-bold text-center mb-8 mt-16">Awards</h2>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          {awards.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ amount: 0.2, once: false }}
            >
              <div className='border-l-4 border-blue-500 mt-10'>
                <div className='ml-6'>
                  <h4 className='font-bold text-lg'>{a.title}</h4>
                  <p className='text-sm text-gray-500'>{a.place}</p>
                  <p className=' text-justify'>{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='hidden lg:block'>
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={600}
            containerHeight={500}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>



      </div>



    </section>
  )
}
