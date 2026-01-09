import React from 'react'

const Navbar = () => {
  const navItems = ['About', 'Solutions', 'Why Us', 'Pricing']

  return (
    <nav className="fixed top-0 left-0 z-50 w-full  py-2 px-4 h-14">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Container with rounded corners */}
        <div className="bg-black w-full border border-gray-800 rounded-full px-4 py- shadow-lg">
          <div className="flex flex-row items-center justify-between gap-2 md:gap-0">
            
            {/* Logo/Title - Optional */}
            <div className="">
              <span className="text-white font-semibold text-lg">Brand</span>
            </div>

            {/* Centered Navigation Buttons */}
            <div className="w-full md:w-auto">
              <div className="flex justify-center items-center gap- md:gap-6">
                {navItems.map((item) => (
                  <button
                    key={item}
                    className="text-white whitespace-nowrap px-4 py-2 rounded-full text-sm md:text-base 
                             hover:bg-gray-900 hover:text-gray-100 transition-all duration-200
                             active:bg-gray-800 active:scale-95
                             focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button - Optional */}
            <div className="hidden md:block">
              <button className="bg-blue-100 text-blue-600 px-6 py- rounded-full font-medium
                              hover:bg-gray-200 transition-colors duration-200
                              active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar