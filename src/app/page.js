import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StorytellingIntro from "./components/StorytellingIntro";
import EffortlessCreation from "./components/EffortlessCreation";
import PreviewBox from "./components/PreviewBox";
import FeatureCards from "./components/FeatureCards";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import DemocratizingSection from "./components/DemocratizingSection";
import IntelligenceSection from "./components/IntelligenceSection";
import MadeForCreators from "./components/MadeForCreators";
import FooterCTA from "./components/FooterCTA";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen ">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>

      {/* Main Section with gradient background */}
      <div
        className="flex flex-col items-center justify-center w-full min-h-screen pt-32 md:pt-44 -mt-40 md:-mt-60"
        style={{
          backgroundImage: "url('/back-blur.png'), linear-gradient(to bottom, #4A4A4A 0%, #ffffff 20%)",
          backgroundSize: 'auto',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div id="about" className="mt-40 md:mt-60 lg:mt-80">
          <StorytellingIntro />
        </div>

        <div className="mt-32 md:mt-60 lg:mt-96 px-4 sm:px-8 md:px-12 lg:px-20 w-full">
          <EffortlessCreation />
        </div>

        <div id="short-films" className="px-4 sm:px-8 md:px-12 lg:px-20 w-full">
          <PreviewBox />
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto w-full">
          <FeatureCards />
        </div>

        <div id="tech" className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto mt-32 md:mt-60 lg:mt-96 mb-20 w-full">
          <WhatSetsUsApart />
        </div>

        <div className="w-full"
          style={{
            backgroundImage: "url('/democratizing-back-blur.png')",
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="mt-32 md:mt-60 lg:mt-96 mb-20 md:mb-32 w-full px-4 sm:px-8 md:px-12 lg:px-20" >
            <DemocratizingSection />
          </div>
        </div>
        <div className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-20">
          <IntelligenceSection />
        </div>
        <div id="use-cases"
          className="w-full py-16 md:py-24 lg:py-32 pb-[200px] md:pb-[300px] lg:pb-[420px] px-4 sm:px-8 md:px-12 lg:px-20"
          style={{
            backgroundImage: "url('/creatives-back-blur.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <MadeForCreators />
        </div>
        <div id="waitlist"
          className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20"
          style={{
            backgroundImage: "url('/footer-back-blur.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <FooterCTA />
        </div>
      </div>

    </div>
  );
}
