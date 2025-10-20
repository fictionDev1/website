import Image from "next/image";

export default function FooterCTA() {
    return (
        <div className="flex flex-col">
            {/* Top CTA Section */}
            <div className="flex flex-col items-start justify-center min-h-[250px] md:min-h-[350px] lg:min-h-[400px] mb-12 md:mb-16 lg:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal leading-tight mb-6 md:mb-8">
                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF008C] to-[#9F60EE]">
                        Join the wait list for all the latest news and updates.
                    </span>
                    <br />
                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#667EEA] to-[#764BA2]">
                        Become the first few people to try out the Fiction AI Beta.
                    </span>
                </h2>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-black text-white text-base md:text-lg font-medium rounded hover:bg-black/80 transition whitespace-nowrap">
                        Join now
                    </button>
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-black text-base md:text-lg font-medium rounded border border-black hover:bg-gray-100 transition whitespace-nowrap">
                        Get in touch
                    </button>
                </div>
            </div>

            {/* Logo and Counter Section */}
            <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
                <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
                    <Image
                        src="/fiction-icon-logo.png"
                        alt="Fiction AI Logo"
                        width={946}
                        height={222}
                        className="w-full max-w-[250px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[946px] h-auto"
                    />
                </div>

                {/* Heart Icon */}
                <div className="mb-4 md:mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-10 md:h-10">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" />
                    </svg>
                </div>

                {/* Built by text */}
                <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-8 md:mb-12 text-center px-4">
                    Built by creatives with love + tech, in India
                </p>
            </div>

            {/* Dotted Line Separator */}
            <div className="w-full border-t-2 border-dotted border-white/30 mb-6 md:mb-8"></div>

            {/* Footer Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
                <div className="text-white">
                    <p className="text-base md:text-lg font-medium mb-1">© 2025 Fiction AI</p>
                    <p className="text-xs md:text-sm font-light">All trademarks are property of their respective owners.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
                    <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition whitespace-nowrap text-sm md:text-base">
                        Join the wait list
                    </button>
                    <button className="px-6 py-3 bg-black text-white font-medium rounded border border-white hover:bg-white/10 transition whitespace-nowrap text-sm md:text-base">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    );
}

