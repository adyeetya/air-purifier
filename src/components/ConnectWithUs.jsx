'use client'
import React from 'react'
const ConnectButton = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleConnect = () => {
        setIsOpen(true)
    }



    const handleEmail = () => {
        window.location.href = 'mailto:info@aironyx.in'
        setIsOpen(false)
    }

    return (
        <div className="relative inline-block">
            {/* Main Connect Button */}
            <button
                onClick={handleEmail}
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