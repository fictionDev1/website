import Image from "next/image";

export default function StorytellingIntro() {
    return (
        <div className="px-4 sm:px-8">
            <div className="flex justify-center w-full mb-6 md:mb-8">
                <Image
                    src="/fiction-logo.svg"
                    alt="Fiction logo"
                    width={89}
                    height={89}
                    priority
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-[89px] md:h-[89px]"
                />
            </div>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium mb-6 md:mb-8 text-center">
                Storytelling defines humanity
            </h2>

            <div className="max-w-5xl mx-auto">
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] font-normal text-center leading-relaxed">
                    We make it effortless for anyone to express imagination at cinematic quality — faster, smarter, and more emotionally resonant than ever before.<br className="hidden md:block" />
                    Built by creatives with love + tech.
                </p>
            </div>
        </div>
    );
}

