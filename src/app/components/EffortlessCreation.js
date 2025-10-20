export default function EffortlessCreation() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 mb-8 w-full">
            <div className="flex-1">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-medium mb-4 leading-tight">
                    Effortless creation for everyone,<br className="hidden md:block" />
                    on-demand
                </h2>
                <p className="text-white text-base sm:text-lg md:text-xl font-light max-w-2xl">
                    Fiction AI is built for absolute simplicity — a storytelling workflow where
                    anyone can go from idea to cinematic output in minutes.
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
    );
}

