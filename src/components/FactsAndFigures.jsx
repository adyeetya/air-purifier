'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const CARD_WIDTH = 260
const CARD_GAP = 16

const FactsFiguresCarousel = () => {
    const facts = [
        { value: '65.2%', title: 'Reduction in AHU Fan Power', desc: 'Measured at Busan International Financial Center' },
        { value: '80%+', title: 'PM2.5 Removal Efficiency', desc: 'Large-scale commercial HVAC systems' },
        { value: '3.1 kW vs 8.9 kW', title: 'Lower Energy Consumption', desc: 'Same airflow, one-third the power' },
        { value: '12.2 μg/m³', title: 'Post-filter PM2.5 Level', desc: 'Improved to “Good” indoor air quality' },
        { value: '181,359 m³', title: 'Air Volume Treated', desc: 'Single 63-storey commercial tower' },
        { value: '53 Filters | 9 AHUs', title: 'Live Deployment', desc: 'Operational since November 2023' },
        { value: 'Plug & Play', title: 'Retrofit Friendly', desc: 'No HVAC redesign required' },
        { value: 'KRRI', title: 'Deep-Tech Partnership', desc: 'Co-developed with national research institute' },
    ]

    const duplicatedFacts = [...facts, ...facts]

    // speed based on screen size
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768)
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])
    console.log(isMobile)
    const DISTANCE = (CARD_WIDTH + CARD_GAP) * facts.length
    const duration = isMobile ? 14 : 18

    return (
        <section id='facts' className="w-full overflow-hidden bg-[#f3f9ff] py-12">
            <h2 className="text-3xl md:text-4xl mb-10 text-center font-light text-gray-900">
                Facts & Figures
            </h2>

            <motion.div
                className="flex"
                animate={{ x: [0, -DISTANCE] }}
                transition={{
                    duration,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                style={{ gap: CARD_GAP }}
            >
                {duplicatedFacts.map((fact, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: CARD_WIDTH }}
                    >
                        <div className="
                            h-full rounded-2xl
                            bg-gradient-to-br from-white to-[#eef6ff]
                            border border-[#c7ddff]
                            shadow-[0_8px_30px_rgba(37,99,235,0.12)]
                            p-5 flex flex-col justify-between
                        ">
                            <div className="text-xl font-bold text-blue-600">
                                {fact.value}
                            </div>

                            <div className="mt-3 text-sm font-semibold text-gray-900">
                                {fact.title}
                            </div>

                            <div className="mt-1 text-xs text-gray-600 leading-relaxed">
                                {fact.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

export default FactsFiguresCarousel
