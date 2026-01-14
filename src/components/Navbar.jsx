import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  // Map nav item labels to anchor links. Anchors taken from footer where applicable.
  const navItems = [
    { name: 'About', href: '#about-us' }, // matches footer 'Who We Are'
    { name: 'Solutions', href: '#products' }, // matches footer products/solutions
    { name: 'Why Us', href: '#case-study' }, // use facts anchor for 'Why Us'
    { name: 'Pricing', href: '#products' } // assumed anchor (not present in footer)
  ]

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white py-2 px-4 h-14 ">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Container with rounded corners */}
        <div className=" w-full rounded-full px-4 py- shadow-lg">
          <div className="flex flex-row items-center justify-between gap-2 md:gap-0">

            {/* Logo/Title - Optional */}
            <div className="flex flex-row gap-1">
              <Image
                src="/images/Aronyx_logo 1.png"
                alt="Aronyx"
                width={32}
                height={32}
                className="h-8 w-8"
                priority
              />
              <Image
                src="/images/Aronyx_logo 2.png"
                alt="Aronyx"
                width={1200}
                height={320}
                className="hidden md:block h-8 w-auto"
                priority
              />
            </div>

            {/* Centered Navigation Buttons */}
            <div className="w-full md:w-auto">
              <div className="flex justify-center items-center gap- md:gap-6 py-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      "text-slate-800 px-2 py-1 rounded-full text-xs md:text-base hover:bg-slate-900 hover:text-white transition-all duration-200 active:bg-slate-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    }
                  >
                    {item.name}
                  </a>
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