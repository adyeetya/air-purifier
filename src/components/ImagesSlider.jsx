'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MarqueeCarousel = ({ images, speed = 5, visibleItems = 6, gap = 60 }) => {
    // Duplicate images for seamless looping
    const duplicatedImages = [...images, ...images, ...images];

    // Responsive visibleItems and gap
    const getResponsiveSettings = () => {
        if (typeof window === 'undefined') return { items: visibleItems, gap };
        if (window.innerWidth < 640) return { items: 2, gap: 12 }; // mobile
        if (window.innerWidth < 1024) return { items: 3, gap: 24 }; // tablet
        return { items: visibleItems, gap };
    };

    const [responsive, setResponsive] = useState(getResponsiveSettings());

    useEffect(() => {
        const handleResize = () => setResponsive(getResponsiveSettings());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const itemWidth = `calc((100% - ${(responsive.items - 1) * responsive.gap}px) / ${responsive.items})`;
    const [duration, setDuration] = useState(images.length * (10 / speed));

    // Adjust duration when props change
    useEffect(() => {
        setDuration(images.length * (10 / speed));
    }, [images.length, speed]);

    return (
        <div className="relative mb-24 w-full overflow-hidden py-4 
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
        </div>
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