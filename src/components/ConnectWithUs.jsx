'use client'
import React from 'react'
const ConnectButton = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleConnect = () => {
        setIsOpen(true)
    }

    const handleCall = () => {
        window.open('tel:+917524052957', '_blank')
        setIsOpen(false)
    }

    const handleEmail = () => {
        window.location.href = 'mailto:info@aironyx.in'
        setIsOpen(false)
    }

    return (
        <div className="relative inline-block">
            {/* Main Connect Button */}
            <button
                onClick={handleConnect}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
                <span className="text-sm sm:text-base font-medium bg-green-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-green-400 transition-colors">
                    Connect with us!
                </span>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-100"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Options Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-100 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                        <button
                            onClick={handleCall}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                        >
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-gray-700 font-medium">Call Us</span>
                        </button>

                        <div className="border-t border-gray-200" />

                        <button
                            onClick={handleEmail}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                        >
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700 font-medium">Email Us</span>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default ConnectButton