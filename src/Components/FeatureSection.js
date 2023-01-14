import React, { useEffect, useState } from 'react';
import Feature from './Feature';

const FeatureSection = () => {

    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch("FeatureCards.json")
            .then((res) => res.json())
            .then((data) => setFeatures(data));
    }, []);

    console.log(features);

    return (
        <div>
            <div className="relative container mx-auto">
                <div className="bg-primary w-36 h-36 absolute z-0 top-20 left-0 rounded-2xl"></div>
                <div className="p-4 md:p-6 relative z-10">
                    <div className="flex flex-col rounded-xl container mx-auto px-4 bg-white md:p-20 py-6">
                        <div className="text-left space-y-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-primary">
                                Features you need
                            </h1>
                            <p className="text-gray-500 font-medium text-lg md:w-1/2">
                                No depending be convinced in unfeeling he. Excellence she
                                unaffected and too sentiments her. Rooms he doors there ye aware
                                in by shall.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {features.map((data) => (
                                    <Feature key={data._id} data={data} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;