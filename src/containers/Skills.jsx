import React from 'react'
import { Leaf1, Leaf2, about } from '../assets'
import { AnimatePresence, motion } from 'framer-motion'
import { SkillCard } from '../components'

const Skills = () => {
  return (
    <section id='skills' className='flex items-center justify-center flex-col gap-12 my-2'>
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
            Skills
          </p>
          <img src={Leaf2} className='w-6 h-auto object-contain' alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
          {/* content session */}
          <div className='w-full px-8 flex flex-col gap-4 items-start justify-start'>
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary
          capitalize text-xl font-serif tracking-widest'>
           My skills & Work Experience
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
            <p className="text-texlight text-base tracking-wide text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quo corrupti labore, omnis quam voluptatum dicta, hic tempore dolorum laboriosam fugit quasi perspiciatis veritatis nesciunt modi aut dignissimos numquam explicabo.
            </p>
          </div>
             {/* image section */}
        <div className='w-full flex flex-col gap-4 items-center justify-center px-8'>
         <SkillCard skill={"HTML 5"} percentage={"95%"} color={"#ff3f3f"} move={true}/>
         <SkillCard skill={"CSS 3"} percentage={"75%"} color={"#008fff"}/>
         <SkillCard skill={"Javascript"} percentage={"70%"} color={"#ffb900"} move={true}/>
         <SkillCard skill={"React, Next.Js & Reactnative"} percentage={"75%"} color={"#14db00"}/>
         <SkillCard skill={"Node.js"} percentage={"45%"} color={"#14db00"} move={true}/>
         <SkillCard skill={"Mongo DB & Firebase"} percentage={"50%"} color={"#ff3f3f"}/>  

        </div>
      </div>
    </section>
  )
}

export default Skills