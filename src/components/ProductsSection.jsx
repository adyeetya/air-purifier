import React from 'react'
import { motion } from 'framer-motion'

const ProductsSection = () => {
    const products = [
        {
            id: 1,
            image: "/images/card.png"
        },
        {
            id: 2,
            image: "/images/card1.png"
        },
        {
            id: 3,
            image: "/images/card2.png"
        }
    ]

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
        <section className=" py-12">
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
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                className="flex justify-center cursor-pointer"
                                variants={imageVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {/* Product Image - Simple and clean */}
                                <motion.img
                                    src={product.image}
                                    alt={`Product ${product.id}`}
                                    className="w-full md:max-w-none object-contain rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>
                        ))}
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
                            
                            className="flex justify-center cursor-pointer"
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Product Image - Simple and clean */}
                            <motion.img
                                src='/images/cig_stat.png'
                                alt={`Product`}
                                className="w-full  md:max-w-none object-contain rounded-lg"
                                
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