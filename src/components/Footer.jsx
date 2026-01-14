import React from 'react'
import Image from 'next/image'
import ConnectButton from './ConnectWithUs'
// import { FaYoutube, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const footerLinks = {
    main: [
      { name: 'Home', href: '#' },
      { name: 'Products', href: '#products' },
      { name: 'Facts', href: '#facts' },
      { name: 'Case Study', href: '#case-study' }
    ],
    solutions: [
      { name: 'AXT-CAB', href: '#products' },
      { name: 'AXT-OUT', href: '#products' },
      { name: 'AXT-MOD', href: '#products' }
    ],
    company: [
      { name: 'Who We Are', href: '#about-us' },
      { name: 'Connect with Us!', href: '' }
    ],
    socials: [
      { name: 'YouTube', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'X', href: '#' },
      { name: 'Instagram', href: '#' }
    ]
  }

  return (
    <footer className="relative">
      {/* Top Section - 50% height for desktop */}
      <div className="hidden md:flex items-center justify-center h-[50vh] bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Transform ordinary airflow into <br />
            peak-performance breathing.
          </h2>
          {/* <a href className="text-sm font-medium bg-green-300 px-4 py-2 rounded-full">
            Connect with us!
          </a> */}
          <ConnectButton />
        </div>
      </div>

      {/* Mobile View - Different layout for phone */}
      <div className="md:hidden py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-light text-gray-900 mb-6">
            Transform ordinary airflow into <br />
            peak-performance breathing.
          </h2>
          {/* <span className="text-sm font-medium bg-green-300 px-4 py-2 rounded-full">
            Connect with us!
          </span> */}
          <ConnectButton />
        </div>
      </div>

  {/* Main Footer */}
  <div id="footer" className="bg-blue-50 shadow-md">
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 text-sm">

            {/* Logo Column */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
                <Image
                  src="/images/Aronyx_logo 1.png"
                  alt="Aronyx"
                  width={1000}
                  height={1000}
                  className="h-20 w-20"
                  priority
                />
                <Image
                  src="/images/Aronyx_logo 2.png"
                  alt="Aronyx"
                  width={1200}
                  height={1000}
                  className="block h-20 w-auto"
                  priority
                />
              </div>
            </div>

            {/* First Column - Main Links */}
            <div>

              <ul className="space-y-3">
                {footerLinks.main.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Column - Solutions */}
            <div>
              <h3 className=" text-blue-600 mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((solution) => (
                  <li key={solution.name}>
                    <a
                      href={solution.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {solution.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Column - Inside AIRONYX */}
            <div>
              <h3 className="text-blue-600 mb-4">Inside AIRONYX</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fourth Column - Socials */}
            {/* <div>
              <h3 className="text-blue-600 mb-4">Socials</h3>
              <div className="flex flex-col space-y-3">
                {footerLinks.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Aironyx. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer