import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const HomeSocialLinks = ({data, index}) => {
  const[isHoverred, setIsHoverred] = useState(false);
  return (
    <motion.a key={index} className='w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px]
      cursor-pointer'
      href={index}
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 25}}
      transition={{delay: index * 0.1}}

      onMouseEnter={() => setIsHoverred(true)}
      onMouseLeave={() => setIsHoverred(false)}
      >
      <AnimatePresence>
        {isHoverred && (
          <motion.div
           className={`absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}></motion.div>
        )}
        <div className='w-full h-full rounded-full bg-bgPrimary flex items-center justify-center'>
          <data.Icon className={`text-texlight`}/>
        </div>
      </AnimatePresence>
    </motion.a>
  )
}

export default HomeSocialLinks