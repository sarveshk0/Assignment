import React from 'react';
import styles from './SmallScreenComponent.module.css';
import NavbarMobile from './NavbarMobile';
import HomeScreenMobile from './HomeScreenMobile';
import FeaturesMobile from './FeaturesMobile';
import TestimonialsMobile from './TestimonialsMobile';
import Testimonials2 from './Testimonials2';
import Testomonials2mobile from './Testomonials2mobile';
import EndMobile from './EndMobile';
import FooterMobile from './FooterMobile';
const SmallScreenComponent = () => {
  return (
    <div className={styles.container}>
       <div className='mobile-view'>
       <NavbarMobile/>
       <HomeScreenMobile/> 
       <FeaturesMobile/>
       <TestimonialsMobile/>
       <Testomonials2mobile/>
       <EndMobile/>
       <FooterMobile/>
        </div> 
      
    </div>
  );
};

export default SmallScreenComponent;
