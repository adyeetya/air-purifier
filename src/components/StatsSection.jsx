import React from 'react'
import Image from 'next/image'

const StatsSection = () => {


    return (
        <section className=" ">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Left Side - 70% */}
                    <div className="lg:w-7/12 flex flex-col justify-evenly">
                      <div>
                          <h4 className="text-3xl font-light mb-3">
                            Pollution does not stay outside the coach.
                        </h4>

                        <p className="text-gray-500 mb-8 md:mb-12 text-base">
                            It enters silently through ventilation ducts, brake dust, track debris and exhaust seepage.

                        </p>
                      </div>



                        {/* Image below stats */}
                        <div className="mb-8">
                            <Image
                                src="/images/stat.png"
                                alt="Data visualization"
                                width={600}
                                height={350}
                                className="w-125 h-auto"
                            />

                        </div>

                        <p className="text-gray-600 text-lg font-semibold">
                            India is moving millions every day<span className='font-light italic'> — inside mobile pollution chambers.</span>
                        </p>
                    </div>

                    {/* Right Side - 30% with Image */}
                    <div className="lg:w-5/12">
                        <div className="relative">
                            <Image
                                src="/images/ChatGPT Image Jan 7, 2026, 01_51_58 AM-Photoroom 1.png"
                                alt="Monitoring device"
                                width={400}
                                height={500}
                                className="w-full h-auto "
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default StatsSection