import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
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
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;