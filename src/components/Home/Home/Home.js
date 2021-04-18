import React from 'react';
import Header from '../Header/Header';
import Experience from '../Experience/Experience';
import OurClasses from '../OurClasses/OurClasses';
import Footer from '../Footer/Footer';
import FooterBottom from '../FooterBottom/FooterBottom';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header/>
            <Experience/>
            <OurClasses/>
            <Review/>
            <Footer/>
            <FooterBottom/>
        </div>
    );
};

export default Home;