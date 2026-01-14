import React, { useState } from 'react'

const CaseStudy = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded)
    }

const articleContent = `
    <div class="w-full">
      <!-- This will be displayed in a two-column layout -->
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Image Container - ABOVE text on mobile, right on desktop -->
        <div class="w-full lg:w-2/5 flex-shrink-0 order-first lg:order-last">
          <div class=" rounded-lg p-1">
            <p class="text-gray-500 text-sm mb-3">Case Study Results</p>
            <!-- Image will be placed here - you can replace this with your image -->
            <div class=" rounded flex items-center justify-center overflow-hidden">
              <img src='/images/stats/case_graph.png' alt="Case Study Graph" class="w-full h-full object-contain">
            </div>
          </div>
        </div>

        <!-- Text Content - BELOW image on mobile, left on desktop -->
        <div class="flex-1 order-last lg:order-first">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-blue-600 mb-3">Solution</h3>
              <p class="text-gray-700">
                Retrofitted AHUs with Aironyx aluminium-coated conductive filters, enabling active electro-capture without HVAC modifications.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-medium text-blue-600 mb-3">Results</h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-2">
                <li>PM2.5 reduced from 51.8–58.3 μg/m³ to 12.2 μg/m³</li>
                <li>Indoor air quality improved from Bad to Good</li>
                <li>Stable, sustained performance in live operation</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-medium text-blue-600 mb-3">Impact</h3>
              <p class="text-gray-700">
                Proven plug-and-play solution for large commercial buildings, scalable without system redesign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

    return (
        <section id='case-study' className="">
            <div className="max-w-6xl mx-auto">

                <div className='my-12 text-'>
                    <h3 className='mb-2 uppercase text-blue-500'>
                        Impact in action
                    </h3>
                    <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
                    >Designed for every building. <br />
                        <span className='font-semibold'>Proven across industries.</span></h1>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section - Left */}
                        <div className="md:w-1/2">
                            <img
                                src="/images/casestudy.png"
                                alt="Case Study"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Section - Right */}
                        <div className="md:w-1/2 p-6 md:p-8">
                            {/* Date */}
                            <div className="text-sm text-gray-500 mb-4">
                                November 15, 2023
                            </div>

                            {/* Main Title/Description */}
                            <h2 className="text-lg font-light text-gray-900">
                                Large-Scale AHU Retrofit — Busan International Financial Center
                            </h2>

                            <p className="text-gray-500 text-sm mb-6">
                                Client <br /> Korea Housing Finance Corporation <br />  Busan International Financial Center, South Korea
                            </p>
                            {/* Challenge Section */}
                            <div className="mb-6">
                                <h4 className="text-lg font-light underline  text-red-700 mb-2">
                                    Challenge
                                </h4>
                                <p className="text-gray-700">
                                    Despite existing medium-grade filters, indoor PM2.5 levels remained in the “Bad” range, exposing occupants to prolonged particulate pollution even inside a premium commercial building.                                </p>
                            </div>

                            {/* Read More Button */}
                            <button
                                onClick={toggleReadMore}
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </div>

                    {/* Full Article Content - Shows below the card */}
                    {isExpanded && (
                        <div className="p-6 md:p-8 border-t border-gray-200 transition-all duration-300 ease-in-out">
                            <div
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: articleContent }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CaseStudy