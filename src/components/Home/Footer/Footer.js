import React from 'react';
import './Footer.css';
import FooterColumn from '../FooterColumn/FooterColumn';

const Footer = () => {
    const noNamed = [
        {name: "Become Instructor" , link: "/emergency"},
        {name: "Contact Us" , link: "/checkup"},
        {name: "Privacy Policy" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Support Center" , link: "/checkup"},
    ]
    const ContactInfo = [
        {name: "1810 Kings Way King Street, 5th Avenue, New York" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const OpenHours = [
        // {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Monday 11am-7pm" , link: "/class"},
        // {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        // {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Tuesday-Friday 11am-8pm" , link: "/class"},
        {name: "Saturday 10am-6pm" , link: "/class"},
        {name: "Sunday 11am-6pm" , link: "/class"}
    ]
    const LatestPosts = [
        {name: "Yoga’s Power to Cure Depression" , link: "/emergency"},
        {name: "Tips For Getting Started" , link: "/checkup"},
        {name: "Yoga Mistakes To Avoid" , link: "/personal-treatment"},
        {name: "6 Yoga Poses For Lower Back Pain" , link: "/tooth-extract"},
        {name: "The Best Yoga Poses To Relieve Soreness" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both bg-brand text-white">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColumn key={1} menuTitle="Latest Posts" menuItems={LatestPosts}/>
                    <FooterColumn key={2} menuTitle="Open Hours" menuItems={OpenHours}/>
                    <FooterColumn key={3} menuTitle={""} menuItems={noNamed}/>
                    <FooterColumn key={4} menuTitle="Contact Info" menuItems={ContactInfo}> 
                       
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">1800-2355-2356</button>
                        </div>
                    </FooterColumn>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;