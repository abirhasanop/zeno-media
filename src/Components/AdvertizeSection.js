import React from 'react';
import Button from '../Shared/Button';

const AdvertizeSection = () => {
    return (
        <div className='mt-16'>
            <div className="relative container mx-auto">
                <div className="bg-[#0cbe8c] w-36 h-36 absolute top-0 left-0 rounded-2xl"></div>
                <div className="relative p-4 md:p-6 z-50">
                    <div className="rounded-xl container mx-auto px-4 bg-white md:p-20">
                        <div className="text-left space-y-8">
                            <h1 className="text-5xl font-bold text-[#0cbe8c]">
                                Advertise better with Zeno
                            </h1>
                            <p className="text-[#a7a7a7] font-medium text-lg">
                                Our team consists of unorthodox thinkers, all with diverse
                                background
                            </p>
                            <Button>Try Now</Button>
                        </div>
                    </div>
                </div>
                <div className="border-4 bg-[#b6ebdd] border-[#0cbe8c] w-36 h-36 absolute bottom-0 right-0 rounded-2xl"></div>
            </div>
        </div>
    );
};

export default AdvertizeSection;