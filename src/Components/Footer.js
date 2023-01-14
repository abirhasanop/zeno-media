import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16'>
            <div className="relative container mx-auto">
                <div className="bg-[#0cbe8c] w-36 h-36 absolute z-0 top-32 left-0 rounded-2xl"></div>
                <div className="p-4 md:p-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl container mx-auto px-4 py-4 bg-white md:p-10">
                        <div className="text-left px-10">
                            <img
                                className="w-32 md:w-48"
                                src="https://i.ibb.co/tzhCzH5/Image-1-2x.png"
                                alt=""
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#b5ebde] text-left pt-8 pr-4 pb-4 rounded-3xl">
                                <h1 className="text-[#09805e] text-3xl font-bold border-l-4 border-[#09805e] pl-4">
                                    Company
                                </h1>
                                <ul className="text-[#0cbe8c] pl-4 pt-4">
                                    <li className="text-2xl font-semibold">Home</li>
                                    <li className="text-2xl font-semibold">Inventory</li>
                                    <li className="text-2xl font-semibold">Checkout</li>
                                </ul>
                            </div>
                            <div className="bg-[#b5ebde] text-left pt-8 pr-4 pb-4 rounded-3xl">
                                <h1 className="text-[#09805e] text-3xl font-bold border-l-4 border-[#09805e] pl-4">
                                    About Us
                                </h1>
                                <ul className="text-[#0cbe8c] pl-4 pt-4">
                                    <li className="text-2xl font-semibold">Who are we</li>
                                    <li className="text-2xl font-semibold">What we do</li>
                                    <li className="text-2xl font-semibold">Our Reach</li>
                                </ul>
                            </div>
                            <div className="bg-[#b5ebde] text-left pt-8 pr-4 pb-4 rounded-3xl">
                                <h1 className="text-[#09805e] text-3xl font-bold border-l-4 border-[#09805e] pl-4">
                                    Subscribe to our newsletter
                                </h1>
                                <div className="pl-4 mt-4">
                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        className="input w-full max-w-xs pl-4 text-[#0cbe8c] font-bold text-lg text-center"
                                    />
                                    <button className="btn bg-[#0cbe8c] border-none hover:bg-[#08a77a] w-full text-white mt-4">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-4 bg-[#0cbe8c43] border-primary w-36 h-36 absolute z-0 top-32 right-0 rounded-2xl"></div>
            </div>
        </div>
    );
};

export default Footer;