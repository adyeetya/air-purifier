'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const getSettingsFromWidth = (width, visibleItems, gap) => {
    if (width < 640) return { items: 2, gap: 12 };
    if (width < 1024) return { items: 3, gap: 24 };
    return { items: visibleItems, gap };
};

const MarqueeCarousel = ({ images, speed = 5, visibleItems = 6, gap = 60 }) => {
    const duplicatedImages = [...images, ...images, ...images];

    // ✅ deterministic initial render (SSR safe)
    const [responsive, setResponsive] = useState({
        items: visibleItems,
        gap,
    });

    useEffect(() => {
        const update = () => {
            setResponsive(
                getSettingsFromWidth(window.innerWidth, visibleItems, gap)
            );
        };

        update(); // run once on mount
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [visibleItems, gap]);

    const itemWidth = `calc((100% - ${(responsive.items - 1) * responsive.gap}px) / ${responsive.items})`;

    const duration = images.length * (10 / speed);

    return (
        <section className="relative  w-full overflow-hidden  
                bg-linear-to-b ">
            {/* <h2 className="text-2xl md:text-3xl font-thin text-center mb-6">Our Customers</h2> */}
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', `-${100 * (images.length / duplicatedImages.length)}%`],
                }}
                transition={{
                    duration,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                style={{ gap: `${responsive.gap}px` }}
            >
                {duplicatedImages.map((image, index) => (
                    <div
                        key={`${index}-${image}`}
                        className="flex-shrink-0 p-2"
                        style={{ width: itemWidth, minWidth: 0 }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index % images.length}`}
                            className="object-contain w-full h-24 sm:h-32 md:h-40 lg:h-full rounded-xl"
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default MarqueeCarousel;

// Usage:
// <MarqueeCarousel 
//   images={['/img1.jpg', '/img2.jpg', '/img3.jpg']}
//   speed={1} 
//   visibleItems={3}
//   gap={8}
// />