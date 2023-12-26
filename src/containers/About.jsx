import React from 'react'
import { Leaf1, Leaf2, pics } from '../assets'
import { AnimatePresence, motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about' className='flex items-center justify-center flex-col gap-12 my-2'>
      {/* title */}
      <div className='w-full flex items-center justify-center py-24'>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className='flex items-center justify-around w-52'>
          <img src={Leaf1} className='w-6 h-auto object-contain' alt="" />
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary
          capitalize text-xl font-serif tracking-widest'>
            About
          </p>
          <img src={Leaf2} className='w-6 h-auto object-contain' alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
        {/* image section */}
        <div className='w-full flex items-center justify-center px-8'>
          <div className='w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative'>
            <img src={pics} alt=""
              className='w-full rounded-md h-auto object-contain'
            />
            <div className="absolute w-full h-full -top-3 -left-2
          bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10
          "></div>
          </div>
        </div>
        {/* content session */}
        <div className='w-full px-8 flex flex-col gap-4 items-start justify-start'>
          <p className="text-texlight text-base tracking-wide text-justify font-sans font-bold">
            Akande Timothy Olawole

            Front-End Developer

            Greetings! I am Akande Timothy Olawole, a passionate front-end developer with a knack for creating seamless and engaging user experiences. My journey into the world of web development began with a comprehensive Full Stack course at Gomycode, where I earned a certificate showcasing my commitment to mastering the intricacies of modern web technologies.            </p>
          <p className="text-texlight text-base tracking-wide text-justify font-sans font-bold ">
          While I initially delved into the realm of Full Stack development, I soon discovered my true passion lies in crafting captivating user interfaces. Focused on the front end, I specialize in using cutting-edge technologies such as Next.js and React.js to bring designs to life and enhance user interactions.          </p>
          <p className="text-texlight text-base tracking-wide text-justify font-sans font-bold">
          Despite my primary focus on front-end development, I have ventured into the back end, gaining valuable insights into technologies like Node.js, MongoDB, Mongoose, and Express. This versatile skill set allows me to collaborate seamlessly with full-stack teams, bridging the gap between design and functionality          </p>
          <p className="text-texlight text-base tracking-wide text-justify  font-sans font-bold">
          I am proud i built some major front-end projects that showcase both my technical skills and creative vision. Among these are a cryptocurrency website, where I explored the dynamic world of digital currencies, an e-commerce website designed for optimal user experience, and a fintech platform that reflects my commitment to innovation in the financial technology space.          </p>
          <p>As I continue to grow in the ever-evolving field of web development, my dedication to creating visually stunning and highly functional web applications remains unwavering. I am excited about the possibilities that lie ahead and look forward to contributing my skills to projects that push the boundaries of what is possible on the web.</p>
        </div>
      </div>
    </section>
  )
}

export default About