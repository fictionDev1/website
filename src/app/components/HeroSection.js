export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-[#4A4A4A] px-4 sm:px-8">
            <p className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-[300] text-white leading-tight mb-6 md:mb-8">
                Seeing <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF008C] to-[#00BBFF]">
                    your stories{' '}
                </span>
                come to life <br className="hidden sm:block" />
                has never been easier
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6 w-full sm:w-auto px-4 sm:px-0">
                <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition text-sm md:text-base">
                    Join Waitlist
                </button>
                <button className="px-6 py-3 bg-transparent text-white font-medium rounded border border-white hover:bg-white/10 transition text-sm md:text-base">
                    Get in touch
                </button>
            </div>
        </div>
    );
}

