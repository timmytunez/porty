import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { hero } from '../assets'
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
            <HeroTypeWritter speed={100} words={["a Front-end dev..", "a mobile-app dev..", "a Freelanzer.."]} />
          </h2>
          <p className='text-base text-texlight mt-6 text-center lg:text-left font-sans font-bold'>
            a passionate front-end developer with a knack for creating seamless and engaging user experiences. My journey into the world of web development began with a comprehensive Full Stack course at Gomycode, where I earned a certificate showcasing my commitment to mastering the intricacies of modern web technologies.            </p>
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
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
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
        <div className=''>
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
            src={hero}
            className='img rounded-t-full bg-gradient-to-br from bg-white'
          />
        </div>
      </div>
    </section>
  )
}

export default Home