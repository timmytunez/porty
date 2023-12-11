import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MenuItem = ({ menu, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <a href={menu.uri} className="w-6 h-6  rounded-full flex items-center justify-center group cursor-pointer 
    hover:bg-gradient-to-br hover:from-primary hover:from-secondary relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}


    >
      <menu.Icon className={`text-texlight group-hover:text-bgPrimary text-xl `} />

      {/* tiool tip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className="absolute bg-white rounded-md px-6 py-2 -left-[140px]
          after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45
          "
            style={{ boxShadow: "inset 0px 0px rgba(0,0,0,0.4) " }}
          >

            <p className='text-bgPrimary'>{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  )
}

export default MenuItem