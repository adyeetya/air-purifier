'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import ConnectButton from './ConnectWithUs'
const Hero = () => {
  const line1 = "You are not breathing air."
  const line2 = "You are breathing damage."

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0,
      color: "#9ca3af"
    },
    visible: { 
      opacity: 1,
      color: "#000000",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const line2Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 2
      }
    }
  }

  return (
    <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
      {/* Background SVG Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/BG.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex h-[60vh] md:min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl mx-auto w-full text-center px-4">
          {/* Animated Title */}
          <div className="mb-6">
            {/* First Line - Better mobile spacing */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl  font-semibold sm:font-bold leading-tight sm:leading-normal">
                <span className="block">
                  <motion.span variants={wordVariants} className="inline-block mr-1 sm:mr-2">You</motion.span>
                  <motion.span variants={wordVariants} className="inline-block mr-1 sm:mr-2">are</motion.span>
                  <motion.span variants={wordVariants} className="inline-block mr-1 sm:mr-2">not</motion.span>

                  <motion.span variants={wordVariants} className="inline-block mr-1 sm:mr-2">breathing</motion.span>
                  <motion.span variants={wordVariants} className="inline-block">air.</motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Second Line - Better mobile spacing */}
            <motion.div
              variants={line2Variants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl  font-semibold sm:font-bold leading-tight sm:leading-normal mt-3 sm:mt-4 md:mt-6">
                <span className="block">
                  <motion.span variants={wordVariants} className="inline-block mr-1 sm:mr-2">You</motion.span>
                  <motion.span variants={wordVariants} className="inline-block mr-1 sm:mr-2">are</motion.span>
              
                  <motion.span variants={wordVariants} className="inline-block mr-1 sm:mr-2">breathing</motion.span>
                  <motion.span variants={wordVariants} className="inline-block">damage.</motion.span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Connect button */}
          <motion.div
            className="z-30 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm mb- mt-4 sm:mt-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 2.5,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            {/* <span className="text-sm sm:text-base font-medium bg-green-300 px-4 py-2 rounded-full whitespace-nowrap">
              Connect with us!
            </span> */}
            <ConnectButton />
          </motion.div>

          {/* 5 Stars and Trusted Text */}
          <motion.div
            className="  flex flex-col items-center gap-2 sm:gap-3 w-full max-w-xs sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-medium text-center">
              Trusted by hundreds of companies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero