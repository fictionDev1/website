'use client';
import { useState } from 'react';

export default function MadeForCreators() {
    const [activeTab, setActiveTab] = useState('Storytellers');

    const tabs = [
        'Storytellers',
        'Marketing teams',
        'Studios',
        'Educators',
        'Small Businesses',
        'Real-estate'
    ];

    return (
        <div>
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal mb-4 md:mb-6 leading-tight">
                Made for <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#9F60EE] to-[#FF008C]">every creator</span>, across industries
            </h2>

            <p className="text-black text-base sm:text-lg md:text-xl font-normal mb-6 md:mb-8 max-w-4xl">
                From brands to studios to solo creators, Fiction AI fits any workflow — enabling anyone, in any industry, to turn ideas into cinematic stories with speed, scale, and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <button className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-black/80 transition whitespace-nowrap text-sm md:text-base">
                    Join the wait list
                </button>
                <button className="px-6 py-3 bg-white text-black font-medium rounded border border-black hover:bg-gray-100 transition whitespace-nowrap text-sm md:text-base">
                    Get in touch
                </button>
            </div>

            {/* Tabs and Cards Layout */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* Left Sidebar - Tabs */}
                <div className="flex flex-row lg:flex-col gap-2 md:gap-3 lg:min-w-[200px] justify-start lg:justify-evenly overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 md:px-6 py-2 md:py-3 text-left rounded-lg transition-all duration-300 whitespace-nowrap text-sm md:text-base ${activeTab === tab
                                ? 'bg-white text-black font-medium shadow-md'
                                : 'bg-transparent text-white font-normal hover:bg-white/20'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Right Side - Cards Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-3 md:gap-4 backdrop-blur-sm bg-white/80 p-3 md:p-4 rounded-xl">
                        {/* Large top card spanning all columns */}
                        <div
                            className="col-span-2 md:col-span-4 row-span-1 min-h-[150px] md:min-h-[200px] rounded-xl backdrop-blur-sm bg-white p-4 md:p-8 transition-all duration-300 hover:bg-white/90"
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.4)'
                            }}
                        >
                        </div>

                        {/* Four smaller cards in a row */}
                        <div
                            className="col-span-1 row-span-1 rounded-xl backdrop-blur-sm bg-white p-3 md:p-6 h-[120px] md:h-[150px] lg:h-[200px] transition-all duration-300 hover:bg-white/90"
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.4)'
                            }}
                        >
                        </div>

                        <div
                            className="col-span-1 row-span-1 rounded-xl backdrop-blur-sm bg-white p-3 md:p-6 h-[120px] md:h-[150px] lg:h-[200px] transition-all duration-300 hover:bg-white/90"
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.4)'
                            }}
                        >
                        </div>

                        <div
                            className="col-span-1 row-span-1 rounded-xl backdrop-blur-sm bg-white p-3 md:p-6 h-[120px] md:h-[150px] lg:h-[200px] transition-all duration-300 hover:bg-white/90"
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.4)'
                            }}
                        >
                        </div>

                        <div
                            className="col-span-1 row-span-1 rounded-xl backdrop-blur-sm bg-white p-3 md:p-6 h-[120px] md:h-[150px] lg:h-[200px] transition-all duration-300 hover:bg-white/90"
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.4)'
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

