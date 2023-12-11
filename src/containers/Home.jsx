import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from '../assets'
import { HeroTypeWritter, HomeSocialLinks } from '../components'
import { Socials } from '../utils/helper'

const Home = () => {
  return (
    <section id='home' className='flex items-center justify-center flex-col gap-12 relative'>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-20 gap-4 w-full">
        {/* content section */}
        <div className='w-full h-full flex flex-col items-center lg:items-start justify-center gap-4'>
          <h2 className='text-3xl lg:text-4xl text-texlight'>
            Hello, It's me
            <span className='block tracking-wider text-4xl lg:text-6xl mt-4 text-white'>
              {" "}
              timmyTunez
            </span>
          </h2>
          {/* typewiter */}
            <h2 className='text-2xl lg:text-4xl mt-4 text-texlight'>
              And I'm{" "}
              <HeroTypeWritter speed={100} words={["a Developer..", "a YouTuber..", "a Freelanzer.."]}/>
            </h2>
            <p className='text-base text-texlight mt-6 text-center lg:text-left'>  
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet fugiat harum qui nesciunt? Modi vel, molestias dignissimos a mollitia earum excepturi incidunt ipsam et, enim ducimus, ab ullam libero! Quia.
            </p>
            {/* social media links */}
            <div className="flex items-center justify-center gap-10 mt-16">
              <AnimatePresence>
                {Socials && Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {/* hire me  */}
            <a href="/"
            style={{boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)"}}
            className="mt-12 border border-[rgba(255,255,255,0.3)]
            rounded-xl px-8 py-3 active:95 group hover:border-primary"
            >
              <p className='text-texlight group-hover:text-transparent group-hover:bg-clip-text
              group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary'>
                Hire Me
              </p>
            </a>
        </div>
        {/* hero image */}
        <div>
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
            src={Hero}
            className='w-auto h-auto object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default Home