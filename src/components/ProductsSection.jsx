import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const products = [
    {
        id: 1,
        image: "/images/card.png",
        altImage: "/images/card_full.png",
    },
    {
        id: 2,
        image: "/images/card2.png",
        altImage: "/images/card2_full.png",
    },
    {
        id: 3,
        image: "/images/card3.png",
        altImage: "/images/card3_full.png",
    },
]

const ProductsSection = () => {
    const [activeImages, setActiveImages] = useState({})

    const toggleImage = (id) => {
        setActiveImages((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    // Simple animation variants
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1
        }
    }

    return (
        <section id='products' className="">
            <div className="mx-auto w-full mb-12">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Heading */}
                    <motion.h1
                        className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
                        variants={itemVariants}
                    >
                        What we build
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-gray-600 font-light mb-8 md:mb-12"
                        variants={itemVariants}
                    >
                        Three systems. One mission: Make every enclosed journey breathable.

                    </motion.p>

                    {/* Products Grid - Single column on mobile, 3 columns on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {products.map((product) => {
                            const isAlt = activeImages[product.id]
                            return (
                                <div
                                    key={product.id}
                                    className="flex justify-center cursor-pointer"
                                    onClick={() => toggleImage(product.id)}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={isAlt ? "alt" : "main"}
                                            src={isAlt ? product.altImage : product.image}
                                            alt="Product"
                                            className="w-full object-contain rounded-lg"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                        />
                                    </AnimatePresence>
                                </div>
                            )
                        }
                        )}
                    </div>
                </motion.div>
            </div>
            <div className="mx-auto w-full">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Heading */}
                    <motion.h1
                        className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
                        variants={itemVariants}
                    >
                        Heath Impact Strip
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-gray-600 font-light mb-8 md:mb-12"
                        variants={itemVariants}
                    >
                        Air pollution cuts years off life expectancy — not days.

                    </motion.p>

                    {/* Products Grid - Single column on mobile, 3 columns on desktop */}
                    <div className="">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 justify-center cursor-pointer gap-2 md:gap-16"
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* First image - top center on mobile, first on desktop */}
                            <motion.img
                                src='/images/stats/cig-stat.png'
                                alt={`Product`}
                                className="
        w-full md:max-w-none object-contain rounded-lg
        /* Mobile: Place in center */
        col-start-1 row-start-1 
        /* Center align on mobile */
        justify-self-center
        /* Mobile sizing */
        max-w-[45%] md:max-w-none
        /* Pyramid positioning for mobile only */
        md:col-auto md:row-auto md:justify-self-auto
      "
                                transition={{ duration: 0.2 }}
                            />

                            {/* Second image - bottom left on mobile, second on desktop */}
                            <motion.img
                                src='/images/stats/cig-stat1.png'
                                alt={`Product`}
                                className="
        w-full md:max-w-none object-contain rounded-lg
        /* Mobile: Place at bottom left */
        col-start-1 row-start-2 
        justify-self-start
        /* Mobile sizing */
        max-w-[45%] md:max-w-none
        mt-4 md:mt-0
        /* Pyramid positioning for mobile only */
        md:col-auto md:row-auto md:justify-self-auto
      "
                                transition={{ duration: 0.2 }}
                            />

                            {/* Third image - bottom right on mobile, third on desktop */}
                            <motion.img
                                src='/images/stats/cig-stat2.png'
                                alt={`Product`}
                                className="
        w-full md:max-w-none object-contain rounded-lg
        /* Mobile: Place at bottom right */
        col-start-1 row-start-2 
        justify-self-end
        /* Mobile sizing */
        max-w-[45%] md:max-w-none
        mt-4 md:mt-0
        /* Pyramid positioning for mobile only */
        md:col-auto md:row-auto md:justify-self-auto
      "
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProductsSection