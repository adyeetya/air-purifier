import React from 'react'
import { motion } from 'framer-motion'

const HowWeWork = () => {
    const steps = [
        {
            id: 1,
            image: "/images/step1.png",
            name: "Capture",
            text: "Aluminium-Coated Conductive Media Air first passes through Aironyx's proprietary Al-coated conductive filter layer"
        },
        {
            id: 2,
            image: "/images/step2.png",
            name: "Neutralise",
            text: "Electro-Surface Interaction Captured pollutants are held on the conductive surface where they are stabilised and neutralised, preventing reentrainment back into airflow"
        },
        {
            id: 3,
            image: "/images/step3.png",
            name: "Sustain",
            text: "Low-Resistance Airflow Architecture Because the system works electrically rather than by dense mechanical blocking, fan load reduces drastically."
        }
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    const stepVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    return (
        <section className="">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Heading */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
                        variants={itemVariants}
                    >
                        How We Work
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-gray-600 font-light mb-8 md:mb-12"
                        variants={itemVariants}
                    >
                        Our simple and efficient process to deliver results
                    </motion.p>

                    {/* Steps Container */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.id}
                                className="text-center"
                                variants={stepVariants}
                            >
                                {/* Image Container with Name in Center */}
                                <div className="relative mb-6 mx-auto w-32 h-32 flex items-center justify-center">
                                    <img
                                        src={step.image}
                                        alt={`Step ${step.id}`}
                                        className="w-full h-full object-contain"
                                    />
                                    {/* Name Overlay - Centered on image */}
                                    <div className={`absolute inset-0 flex items-center justify-center ${step.id === 1 ? 'translate-x-[-5px]' : ''}`}>
                                        <span className="text-xs font-light text-gray-600">
                                            {step.name}
                                        </span>
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-gray-700 text-sm">
                                    {step.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HowWeWork