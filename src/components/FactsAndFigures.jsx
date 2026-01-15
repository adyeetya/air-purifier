'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const getSettingsFromWidth = (width) => {
    if (width < 640) return { items: 1, gap: 16 }
    if (width < 1024) return { items: 2, gap: 20 }
    return { items: 3, gap: 24 }
}

const FactsFiguresCarousel = () => {
    const facts = [
        {
            value: '65.2%',
            title: 'Reduction in AHU Fan Power',
            desc: 'Measured at Busan International Financial Center',
        },
        {
            value: '80%+',
            title: 'PM2.5 Removal Efficiency',
            desc: 'Large-scale commercial HVAC systems',
        },
        {
            value: '3.1 kW vs 8.9 kW',
            title: 'Lower Energy Consumption',
            desc: 'Same airflow, one-third the power',
        },
        {
            value: '12.2 μg/m³',
            title: 'Post-filter PM2.5 Level',
            desc: 'Improved to “Good” indoor air quality',
        },
        {
            value: '181,359 m³',
            title: 'Air Volume Treated',
            desc: 'Single 63-storey commercial tower',
        },
        {
            value: '53 Filters | 9 AHUs',
            title: 'Live Deployment',
            desc: 'Operational since November 2023',
        },
        {
            value: 'Plug & Play',
            title: 'Retrofit Friendly',
            desc: 'No HVAC redesign required',
        },
        {
            value: 'KRRI',
            title: 'Deep-Tech Partnership',
            desc: 'Co-developed with national research institute',
        },
    ]
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

    const getSettingsFromWidth = (width) => {
        if (width < 640) return { items: 2, gap: 14 }
        if (width < 1024) return { items: 2, gap: 20 }
        return { items: 3, gap: 24 }
    }

    const duplicatedFacts = [...facts, ...facts, ...facts]

    const [responsive, setResponsive] = useState({
        items: 3,
        gap: 24,
    })

    useEffect(() => {
        const update = () => {
            setResponsive(getSettingsFromWidth(window.innerWidth))
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    const itemWidth = `calc((100% - ${(responsive.items - 1) * responsive.gap}px) / ${responsive.items})`

 
    const duration =
        responsive.items === 3
            ? facts.length * 0.5    // even faster mobile speed
            : facts.length * 4

    return (
        <section className="w-full text-center overflow-hidden  bg-[#f3f9ff]">
            <motion.h2
                className="text-3xl mb-8 md:mb-12 md:text-4xl font-light text-gray-900"
                variants={itemVariants}
            >
                Facts & Figures
            </motion.h2>
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', `-${100 * (facts.length / duplicatedFacts.length)}%`],
                }}
                transition={{
                    duration,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                style={{ gap: responsive.gap }}
            >
                {duplicatedFacts.map((fact, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: itemWidth }}
                    >
                        <motion.div
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            className="
        h-full rounded-2xl
        bg-gradient-to-br from-white to-[#eef6ff]
        border border-[#c7ddff]
        shadow-[0_8px_30px_rgba(37,99,235,0.12)]
        p-5 md:p-7
        flex flex-col justify-between
    "
                        >
                            <div className="text-md md:text-3xl font-semibold md:font-bold text-blue-600 tracking-tight">
                                {fact.value}
                            </div>

                            <div className="mt-2 md:mt-4 text-xs md:text-lg text-gray-900">
                                {fact.title}
                            </div>

                            <div className="mt-1 md:mt-2 text-[10px] md:text-sm leading-relaxed text-gray-600">
                                {fact.desc}
                            </div>
                        </motion.div>

                    </div>
                ))}
            </motion.div>
        </section>
    )
}

export default FactsFiguresCarousel
