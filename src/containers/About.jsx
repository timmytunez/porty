import React from 'react'
import { Leaf1, Leaf2, about } from '../assets'
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
            <img src={about} alt=""
              className='w-full rounded-md h-auto object-contain'
            />
            <div className="absolute w-full h-full -top-3 -left-2
          bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10
          "></div>
          </div>
        </div>
          {/* content session */}
          <div className='w-full px-8 flex flex-col gap-4 items-start justify-start'>
            <p className="text-texlight text-base tracking-wide text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quo corrupti labore, omnis quam voluptatum dicta, hic tempore dolorum laboriosam fugit quasi perspiciatis veritatis nesciunt modi aut dignissimos numquam explicabo.
            </p>
            <p className="text-texlight text-base tracking-wide text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quo corrupti labore, omnis quam voluptatum dicta, hic tempore dolorum laboriosam fugit quasi perspiciatis veritatis nesciunt modi aut dignissimos numquam explicabo.
            </p>
            <p className="text-texlight text-base tracking-wide text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quo corrupti labore, omnis quam voluptatum dicta, hic tempore dolorum laboriosam fugit quasi perspiciatis veritatis nesciunt modi aut dignissimos numquam explicabo.
            </p>
            <p className="text-texlight text-base tracking-wide text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quo corrupti labore, omnis quam voluptatum dicta, hic tempore dolorum laboriosam fugit quasi perspiciatis veritatis nesciunt modi aut dignissimos numquam explicabo.
            </p>
          </div>
      </div>
    </section>
  )
}

export default About