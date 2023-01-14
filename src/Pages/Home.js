import React from 'react';
import AboutUSSection from '../Components/AboutUsSection';
import Banner from '../Components/Banner';
import ClientsSection from '../Components/ClientsSection';
import FeatureSection from '../Components/FeatureSection';
import OurReachSection from '../Components/OurReachSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUSSection />
            <OurReachSection />
            <FeatureSection />
            <ClientsSection />
        </div>
    );
};

export default Home;