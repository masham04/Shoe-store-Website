import React from 'react';
import logo from './homepic.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Home = () => {
    AOS.init({duration: 2000});
    return (
        <div data-aos="fade-up">
            
            <img src={logo} alt='shoes pic' height={'650px'} width={'100%'}></img>
        </div>
    )
}
