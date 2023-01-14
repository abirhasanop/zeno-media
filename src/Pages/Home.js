import React from 'react';
import AboutUSSection from '../Components/AboutUsSection';
import AdvertizeSection from '../Components/AdvertizeSection';
import Banner from '../Components/Banner';
import ClientsSection from '../Components/ClientsSection';
import FeatureSection from '../Components/FeatureSection';
import Footer from '../Components/Footer';
import OurReachSection from '../Components/OurReachSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUSSection />
            <OurReachSection />
            <FeatureSection />
            <ClientsSection />
            <AdvertizeSection />
            <Footer />
        </div>
    );
};

export default Home;