import React from 'react'
import Image from 'next/image'

const StatsSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        {/* DESKTOP LAYOUT - hidden on mobile */}
        <div className="hidden md:flex">
          <div className="flex flex-row gap-6 md:gap-8 w-full">
            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Text block */}
              <div>
                <h4 className="text-2xl md:text-4xl font-light mb-3">
                  Pollution does not stay outside the coach.
                </h4>

                <p className="text-gray-500 mb-6 md:mb-10 text-sm md:text-lg">
                  It enters silently through ventilation ducts, brake dust, track debris and exhaust seepage.
                </p>
              </div>

              {/* Stats images */}
              <div className="flex flex-col md:flex-row gap-2  md:gap-16 lg:gap-24 mb-6">
                <img
                  src="/images/stats/stat2.png"
                  alt="Stat 1"
                  className="h-14 md:h-28 w-auto object-contain"
                />
                <img
                  src="/images/stats/stat1.png"
                  alt="Stat 2"
                  className="h-14 md:h-28 w-auto object-contain"
                />
                <img
                  src="/images/stats/stat3.png"
                  alt="Stat 3"
                  className="h-14 md:h-28 w-auto object-contain"
                />
              </div>

              {/* Bottom text */}
              <p className="text-gray-700 text-sm md:text-lg font-semibold">
                India is moving millions every day
                <span className="font-light italic">
                  {' '}— inside mobile pollution chambers.
                </span>
              </p>
            </div>

            {/* RIGHT SIDE — IMAGE NEVER MOVES */}
            <div className="w-32 sm:w-40 md:w-60 lg:w-[380px] flex-shrink-0">
              <Image
                src="/images/ind_stat_img.png"
                alt="AQI"
                width={400}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT - shown only on mobile */}
   
        <div className="block md:hidden relative">
          {/* Heading at top */}
          <div className="mb-6">
            <h4 className="text-2xl font-light mb-3">
              Pollution does not stay outside the coach.
            </h4>
            <p className="text-gray-500 mb-6 text-sm">
              It enters silently through ventilation ducts, brake dust, track debris and exhaust seepage.
            </p>
          </div>

          {/* Container with overlapping elements */}
          <div className="flex items-start relative my-12 min-h-[250px]">
            {/* Stats cards - Left side - positioned in front */}
            <div className="relative z-20 w-[70%]">
              <AirQualityStats />
            </div>

            {/* Device image - Right side - positioned behind */}
            <div className="absolute right-0 top-0 w-[100%] h-full z-10 flex items-center justify-end">
              <div className="relative w-full h-full">
                <Image
                  src="/images/ind_stat_img.png"
                  alt="AQI"
                  width={300}
                  height={250}
                  className="w-full h-auto object-contain opacity-45"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-gray-700 text-sm font-semibold relative z-30">
            India is moving millions every day
            <span className="font-light italic">
              {' '}— inside mobile pollution chambers.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default StatsSection



const AirQualityStats = () => {
  const stats = [
    {
      mainHeading: '30X',
      subheading: 'PM2.5 is 30× thinner than a human hair'
    },
    {
      mainHeading: '60sec',
      subheading: 'It enters bloodstream in under 60 seconds'
    },
    {
      mainHeading: '99%',
      subheading: 'of the world\'s population lives in places where air quality exceeds WHO limits.'
    }
  ];

  return (
    <div className="">
      <div className=" relative">



        {/* Mapped stats arranged vertically */}
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <div key={index} className="border-b border-gray-400 relative z-10 bg- rounded">
              <div className="text-xl font-bold text-gray-800">{stat.mainHeading}</div>
              <div className='w-1/2 h-1 rounded-full bg-green-500'> </div>
              <div className="text-gray-800 text-xs mt-1">{stat.subheading}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

