'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const line1 = "You are not breathing air."
  const line2 = "You are breathing damage."
  const words1 = line1.split(" ")
  const words2 = line2.split(" ")

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
      color: "#9ca3af" // Light grey
    },
    visible: { 
      opacity: 1,
      color: "#000000", // Black
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Animation for the second line with delay
  const line2Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 2 // Delay second line animation
      }
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Title */}
          <div className="mb-6">
            {/* First Line */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {words1.map((word, index) => (
                  <motion.span
                    key={`line1-${index}`}
                    variants={wordVariants}
                    className="inline-block mr-2 last:mr-0"
                  >
                    {word + " "}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Second Line with delay */}
            <motion.div
              variants={line2Variants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mt-2">
                {words2.map((word, index) => (
                  <motion.span
                    key={`line2-${index}`}
                    variants={wordVariants}
                    className="inline-block mr-2 last:mr-0"
                  >
                    {word + " "}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          </div>

          {/* Rest of the component remains the same */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 2.5,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            <span className="text-sm font-medium bg-green-300 px-4 py-2 rounded-full">
              Connect with us!
            </span>
          </motion.div>

          {/* 5 Stars and Trusted Text */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="text-sm text-gray-700 font-medium">
              Trusted by hundreds of companies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero