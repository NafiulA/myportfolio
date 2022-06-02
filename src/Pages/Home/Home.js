import React from 'react';
import About from './About';
import Hero from './Hero';
import Projects from './Projects';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;