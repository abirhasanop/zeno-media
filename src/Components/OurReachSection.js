import React from 'react';
import Button from '../Shared/Button';

const OurReachSection = () => {
    return (
        <div className='mt-16'>
            <div className="flex flex-col-reverse rounded-xl bg-white pt-20">
                <img
                    src="https://i.ibb.co/1vsg64f/Group-29-2x.png"
                    className="w-full object-cover p-20"
                    alt="banner"
                />
                <div className="text-left space-y-8 border-l-8 border-[#0cbe8c] pl-10 pr-4 md:pl-28">
                    <h1 className="text-5xl font-bold text-[#0cbe8c]">Our Reach</h1>
                    <p className="text-[#a7a7a7] font-medium text-lg">
                        Advertising on our platform gives you direct access to the audience
                        you wish to target.
                    </p>
                    <Button>Try Now</Button>
                </div>
            </div>
        </div>
    );
};

export default OurReachSection;