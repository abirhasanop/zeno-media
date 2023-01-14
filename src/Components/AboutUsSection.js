import React from 'react';
import Button from '../Shared/Button';

const AboutUsSection = () => {
    return (
        <div className='mt-16'>
            <div className="relative container mx-auto">
                <div className="bg-[#0cbe8c] w-36 h-36 absolute z-0 top-0 left-0 rounded-2xl"></div>
                <div className="p-4 md:p-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl container mx-auto px-4 bg-white md:p-20">
                        <img
                            src="https://i.ibb.co/7RGfmBN/art2-2x.png"
                            className="w-full object-cover"
                            alt="banner"
                        />
                        <div className="flex flex-col justify-center md:text-left space-y-8 mb-8">
                            <h1 className="text-5xl font-bold text-[#0cbe8c]">What we do</h1>
                            <p className="text-[#a7a7a7] font-medium text-lg">
                                Since our inception in 2011, our goal has always been to help
                                broadcasters both big and small successes. Beginning with a single
                                service, over the past decade, our service offering has greatly
                                expanded to include world-class streaming, a self-serve radio
                                management platform, mobile apps, the Zeno.fm web directory, and
                                more.
                            </p>
                            <Button>Try Now</Button>
                        </div>
                    </div>
                </div>
                <div className="border-4 bg-[#0cbe8c43] border-[#0cbe8c] z-0 w-36 h-36 absolute bottom-0 right-0 rounded-2xl"></div>
            </div>
        </div>
    );
};

export default AboutUsSection;