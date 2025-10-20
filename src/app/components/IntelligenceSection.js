export default function IntelligenceSection() {
    return (
        <div>
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal mb-6 md:mb-8 leading-tight">
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF008C] to-[#9F60EE]">The intelligence</span> behind the imagination
            </h2>

            <p className="text-black text-base sm:text-lg md:text-xl font-normal mb-4 md:mb-6 max-w-4xl">
                Fiction AI is breaking the boundaries of traditional film-making by making cinematic creation accessible to everyone. It transforms storytelling from a resource-heavy process into an intuitive act of imagination.
            </p>

            <p className="text-black text-base sm:text-lg md:text-xl font-normal mb-4 md:mb-6 max-w-4xl">
                Our algorithm leverages multi-agent collaboration, generative video synthesis, and contextual memory systems to automate the entire short-form production pipeline — from script generation to visual rendering — enabling scalable, high-fidelity storytelling without manual intervention.
            </p>

            <p className="text-black text-base sm:text-lg md:text-xl font-normal mb-6 md:mb-8 max-w-4xl">
                In simpler terms, you get to be creative while we take care of the tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <button className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-black/80 transition whitespace-nowrap text-sm md:text-base">
                    Join the wait list
                </button>
                <button className="px-6 py-3 bg-white text-black font-medium rounded border border-black hover:bg-gray-100 transition whitespace-nowrap text-sm md:text-base">
                    Get in touch
                </button>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-3 gap-4 md:gap-6">
                {/* Agentic AI - Large top card */}
                <div
                    className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 rounded-xl backdrop-blur-sm bg-gray-200/80 p-6 md:p-8 transition-all duration-300 hover:bg-gray-200/90"
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                        Agentic AI
                    </h3>
                    <p className="text-black text-sm sm:text-base md:text-lg font-normal">
                        Autonomous creative agents collaborate like a virtual film crew - writing, directing, and refining every scene for coherent, context-aware storytelling that feels intentional and alive.
                    </p>
                </div>

                {/* Emotion graphs - Left middle */}
                <div
                    className="col-span-1 row-span-1 rounded-xl backdrop-blur-sm bg-gray-200/80 p-6 md:p-8 transition-all duration-300 hover:bg-gray-200/90"
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                        Emotion graphs
                    </h3>
                    <p className="text-black text-sm sm:text-base md:text-lg font-normal">
                        Maps sentiment and rhythm across scenes, adjusting visuals, pacing, and tone to ensure emotional continuity and audience connection throughout the story.
                    </p>
                </div>

                {/* Adaptive rendering engine - Right tall card */}
                <div
                    className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 rounded-xl backdrop-blur-sm bg-gray-200/80 p-6 md:p-8 transition-all duration-300 hover:bg-gray-200/90"
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                        Adaptive rendering engine
                    </h3>
                    <p className="text-black text-sm sm:text-base md:text-lg font-normal">
                        Transforms text into cinematic visuals, optimizing lighting, motion, and composition for high-quality output—whether social short or full-length narrative.
                    </p>
                </div>

                {/* Memory coherence - Left bottom */}
                <div
                    className="col-span-1 row-span-1 rounded-xl backdrop-blur-sm bg-gray-200/80 p-6 md:p-8 transition-all duration-300 hover:bg-gray-200/90"
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                        Memory coherence
                    </h3>
                    <p className="text-black text-sm sm:text-base md:text-lg font-normal">
                        Fiction AI remembers narrative context, character traits, and visual tone across scenes, maintaining consistency in emotion, style, and dialogue through the entire story.
                    </p>
                </div>
            </div>
        </div>
    );
}

