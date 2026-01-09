import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative h-[calc(100vh)] w-full overflow-hidden">
            {/* Background SVG Image */}
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage: `url('/images/BG.png')`,
                    backgroundSize: 'cover', // or 'contain' or custom size
                    backgroundPosition: 'center',

                }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Bold Text */}
                    <h1 className="mb-6 text-4xl font-bold tracking-tight  sm:text-5xl md:text-6xl ">
                        You are not breathing air. <br />
                        You are breathing damage.
                    </h1>

                    {/* Small Bubble */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                        <span className="text-sm font-medium bg-green-200 px-3 py-1 rounded-full">Connect with us!</span>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero