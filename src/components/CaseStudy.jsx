import React, { useState } from 'react'

const CaseStudy = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded)
    }

    const articleContent = `
    <div class="space-y-6">
      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Introduction</h3>
        <p class="text-gray-700">Urban air pollution has become one of the most pressing environmental challenges of our time. With increasing urbanization and industrial activities, cities worldwide are grappling with deteriorating air quality that significantly impacts public health and ecological balance.</p>
      </section>

      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Methodology</h3>
        <p class="text-gray-700">Our study employed a multi-phase approach over 12 months, focusing on high-density urban zones with significant vehicular traffic and industrial presence. We installed 50 monitoring stations across the metropolitan area to collect baseline data on various air quality parameters including PM2.5, PM10, NOx, SOx, and CO levels.</p>
        <p class="text-gray-700">The filtration systems were strategically placed in key locations including public transportation hubs, commercial districts, and residential areas near industrial zones. Each system was equipped with real-time monitoring capabilities and connected to a central dashboard for data analysis.</p>
      </section>

      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Technical Implementation</h3>
        <p class="text-gray-700">The core technology utilized in this study was Aironyx's proprietary electro-surface interaction system. Unlike traditional mechanical filters that rely on dense materials to trap pollutants, our system uses electrically charged conductive surfaces to attract and neutralize airborne particles.</p>
        <p class="text-gray-700">Key technical features included:</p>
        <ul class="list-disc pl-5 text-gray-700 space-y-2">
          <li>Aluminium-coated conductive media with controlled surface charge</li>
          <li>Low-resistance airflow architecture reducing fan energy by 60%</li>
          <li>Smart sensors for adaptive filtration based on real-time air quality data</li>
          <li>Modular design allowing for easy maintenance and scalability</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Environmental Impact</h3>
        <p class="text-gray-700">The implementation resulted in significant environmental benefits beyond air quality improvement. The energy-efficient design reduced overall electricity consumption, while the system's longevity minimized waste generation from filter replacements.</p>
        <p class="text-gray-700">Notably, we observed a 25% reduction in acid rain precursors and a measurable decrease in surface deposition of particulate matter on buildings and infrastructure, potentially extending the lifespan of urban structures.</p>
      </section>

      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Public Health Outcomes</h3>
        <p class="text-gray-700">Collaborating with local health authorities, we tracked respiratory health indicators across the study area. The data revealed significant improvements:</p>
        <ul class="list-disc pl-5 text-gray-700 space-y-2">
          <li>42% reduction in asthma-related emergency room visits among children</li>
          <li>31% decrease in respiratory medication prescriptions</li>
          <li>Improved lung function test results in monitored population groups</li>
          <li>Enhanced productivity and reduced absenteeism in workplaces</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Economic Analysis</h3>
        <p class="text-gray-700">The economic benefits were substantial, with cost-benefit analysis showing:</p>
        <ul class="list-disc pl-5 text-gray-700 space-y-2">
          <li>Healthcare cost savings estimated at $2.3 million annually</li>
          <li>Productivity gains valued at $4.1 million per year</li>
          <li>Reduced maintenance costs for buildings and infrastructure</li>
          <li>ROI achieved within 3.2 years of implementation</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Conclusion and Future Directions</h3>
        <p class="text-gray-700">This case study demonstrates that innovative air purification technology can effectively address urban air quality challenges while delivering economic and health benefits. The success of this pilot program has paved the way for expansion to other cities and the development of next-generation systems.</p>
        <p class="text-gray-700">Future initiatives will focus on integrating renewable energy sources, enhancing IoT capabilities for predictive maintenance, and developing smaller-scale units for residential applications.</p>
      </section>

      <section>
        <h3 class="text-lg font-medium text-gray-900 mb-3">Acknowledgments</h3>
        <p class="text-gray-700">This study was conducted in collaboration with municipal authorities, environmental agencies, and academic institutions. Special thanks to all participating organizations and community members who contributed to this successful initiative.</p>
      </section>
    </div>
  `

    return (
        <div className="py-12 px-4">
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
        </div>
    )
}

export default CaseStudy