import Image from "next/image";

export default function FeatureCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 */}
            <div
                className="rounded-xl p-6 md:p-8 backdrop-blur-sm bg-white/70"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
            >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#FE04A9] to-[#9F60EE] flex items-center justify-center mb-4 md:mb-6">
                    <Image src="/icons/message-edit.svg" alt="Message edit" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-12">
                    No complex prompting, no selecting models
                </h3>
                <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                    Describe your idea naturally; Fiction builds and refines your story automatically.
                </p>
            </div>

            {/* Card 2 */}
            <div
                className="rounded-xl p-6 md:p-8 backdrop-blur-sm bg-white/70"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
            >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#FE04A9] to-[#9F60EE] flex items-center justify-center mb-4 md:mb-6">
                    <Image src="/icons/translate.svg" alt="Translate" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-12">
                    Multi-language capabilities for all parts of the world
                </h3>
                <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                    Create stories in any language with accurate emotion, tone, and cultural adaptation.
                </p>
            </div>

            {/* Card 3 */}
            <div
                className="rounded-xl p-6 md:p-8 backdrop-blur-sm bg-white/70"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
            >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#FE04A9] to-[#1370FF] flex items-center justify-center mb-4 md:mb-6">
                    <Image src="/icons/cube-inside.svg" alt="Cube inside" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-12">
                    Automatic script + character + world building
                </h3>
                <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                    One input generates complete narratives, characters, and environments with cinematic consistency.
                </p>
            </div>

            {/* Card 4 */}
            <div
                className="rounded-xl p-6 md:p-8 backdrop-blur-sm bg-white/70"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
            >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#0587FF] to-[#1370FF] flex items-center justify-center mb-4 md:mb-6">
                    <Image src="/icons/flag-chequered.svg" alt="Flag checkered" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-12">
                    End-to-end generation, no hiccups
                </h3>
                <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                    We do the entire storytelling pipeline from concept to final, high-quality cinematic output.
                </p>
            </div>
        </div>
    );
}

