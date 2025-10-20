import Image from "next/image";

export default function WhatSetsUsApart() {
    return (
        <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal mb-3 md:mb-4">
                <span className="text-black">What sets us </span>
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF008C] to-[#9F60EE]">apart</span>
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl font-light mb-8 md:mb-12">
                Fiction AI redefines how stories are imagined, created, and scaled
                — combining emotional intelligence with cinematic precision.
            </p>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Box 1 */}
                <div className="group rounded-xl p-6 md:p-8 border border-dashed border-gray-300 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/70 cursor-pointer">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                        <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold flex-1">
                            Emotive Storytelling
                        </h3>
                        <div className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <Image src="/icons/heart-circle.svg" alt="Heart circle" width={58} height={58} className="w-12 h-12 md:w-14 md:h-14 lg:w-[58px] lg:h-[58px]" />
                        </div>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg font-light">
                        Our AI understands tone, rhythm, and sentiment to create scenes that truly connect.
                    </p>
                </div>

                {/* Box 2 */}
                <div className="group rounded-xl p-6 md:p-8 border border-dashed border-gray-300 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/70 cursor-pointer">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                        <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold flex-1">
                            Agentic AI Co-Creation
                        </h3>
                        <div className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <Image src="/icons/community.svg" alt="Community" width={58} height={58} className="w-12 h-12 md:w-14 md:h-14 lg:w-[58px] lg:h-[58px]" />
                        </div>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg font-light">
                        Multiple AI agents collaborate to write, direct, and refine every narrative intelligently.
                    </p>
                </div>

                {/* Box 3 */}
                <div className="group rounded-xl p-6 md:p-8 border border-dashed border-gray-300 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/70 cursor-pointer">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                        <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold flex-1">
                            Memory Coherence
                        </h3>
                        <div className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <Image src="/icons/brain.svg" alt="Brain" width={58} height={58} className="w-12 h-12 md:w-14 md:h-14 lg:w-[58px] lg:h-[58px]" />
                        </div>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg font-light">
                        Characters, visuals, and emotions stay consistent across every scene and episode.
                    </p>
                </div>

                {/* Box 4 */}
                <div className="group rounded-xl p-6 md:p-8 border border-dashed border-gray-300 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/70 cursor-pointer">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                        <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold flex-1">
                            Instant Cinematics
                        </h3>
                        <div className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <Image src="/icons/movie-play.svg" alt="Movie play" width={58} height={58} className="w-12 h-12 md:w-14 md:h-14 lg:w-[58px] lg:h-[58px]" />
                        </div>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg font-light">
                        From text to film in minutes, with adaptive rendering that delivers studio-grade output.
                    </p>
                </div>
            </div>
        </div>
    );
}

