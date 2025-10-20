export default function DemocratizingSection() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
                <div className="flex-1">
                    <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal mb-4 md:mb-6 leading-tight">
                        Democratizing <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0587FF] to-[#9F60EE]">short-films +<br className="hidden sm:block" />
                            micro dramas</span> <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF008C] to-[#9F60EE]">for everyone</span>
                    </h2>
                    <p className="text-black text-base sm:text-lg md:text-xl font-light mb-4 md:mb-6">
                        Fiction AI gives everyone the power to create cinematic stories — no crew, no gear,
                        no barriers.
                    </p>
                    <p className="text-black text-base sm:text-lg md:text-xl font-light">
                        Whether you&apos;re crafting a 60-second micro drama, a branded short film, or an
                        emotional narrative for social media, we give you the creative control and studio
                        grade production quality. It&apos;s storytelling liberated — fast, expressive, and accessible
                        to everyone.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:pt-4 w-full lg:w-auto">
                    <button className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-black/80 transition whitespace-nowrap text-sm md:text-base">
                        Join the wait list
                    </button>
                    <button className="px-6 py-3 bg-white text-black font-medium rounded border border-black hover:bg-gray-100 transition whitespace-nowrap text-sm md:text-base">
                        Get in touch
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-3 md:gap-6 mt-8 md:mt-12">
                    <div
                        className="h-full col-span-1 row-span-2 rounded-xl backdrop-blur-md bg-white/80 min-h-[300px] md:min-h-[400px]"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                    />
                    <div
                        className="h-[150px] md:h-[200px] rounded-xl backdrop-blur-md bg-white/80 col-span-1 row-span-1"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                    />
                    <div
                        className="h-[150px] md:h-[200px] rounded-xl backdrop-blur-md bg-white/80 col-span-1 row-span-1"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                    />
                    <div
                        className="h-[150px] md:h-[200px] rounded-xl backdrop-blur-md bg-white/80 col-span-1 row-span-1"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                    />
                    <div
                        className="h-[150px] md:h-[200px] rounded-xl backdrop-blur-md bg-white/80 col-span-1 row-span-1"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                    />
                </div>
            </div>
        </div>

    );
}

