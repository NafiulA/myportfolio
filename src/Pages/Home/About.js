import React from 'react';

const About = () => {
    return (
        <div id='aboutme' className='bg-[#25262A]'>
            <div className='min-h-screen w-full lg:w-3/4 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className='order-2 lg:order-1'>
                    <div className='group min-h-40 w-full max-w-lg bg-[#2D2E32] rounded-md my-6 hover:-translate-y-3 transition-all duration-300 ease-in-out'>
                        <p className='text-white group-hover:text-[#57C78E] text-2xl px-5 pt-5'>Front-end Technologies</p>
                        <p className='px-5 pt-1 text-gray-400 text-sm'>that I worked with</p>
                        <p className='text-sm text-gray-300 px-5 py-5 max-w-sm'>HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, ReactJS, TypeScript</p>
                    </div>
                    <div className='group min-h-40 w-full max-w-lg bg-[#2D2E32] rounded-md my-6 hover:-translate-y-3 transition-all duration-300 ease-in-out'>
                        <p className='text-white group-hover:text-[#57c78e] text-2xl px-5 pt-5'>Back-end Technologies</p>
                        <p className='px-5 pt-1 text-gray-400 text-sm'>that I worked with</p>
                        <p className='text-sm text-gray-300 px-5 py-5 max-w-sm'>JAVA, NodeJS, ExpressJS, MongoDB, Firebase, JWT, NextJS</p>
                    </div>
                    <div className='group min-h-40 w-full max-w-lg bg-[#2D2E32] rounded-md my-6 hover:-translate-y-3 transition-all duration-300 ease-in-out'>
                        <p className='text-white group-hover:text-[#57c78e] text-2xl px-5 pt-5'>Familiar Technologies</p>
                        <p className='px-5 pt-1 text-gray-400 text-sm'>that I have worked with or conceptual knowledge on</p>
                        <p className='text-sm text-gray-300 px-5 py-5 max-w-sm'>AEM (Adobe Experience Manager), AWS, Apache Sling, JCR (Java Content Repository), XML, Python, Computer Networks, Cryptography</p>
                    </div>
                </div>
                <div className='px-5 order-1 lg:order-2'>
                    <div>
                        <p className='text-gray-400 py-3'>Introduction</p>
                    </div>
                    <div>
                        <p className='py-3 text-white text-4xl'>Hi! I'm Nafiul Alam</p>
                    </div>
                    <div className='py-3 max-w-md text-gray-400 text-justify'>
                        <p>a System Engineer passionate about building scalable, user-focused web experiences. With over two years of professional experience in Japan, I specialize in front-end development and CMS/DXP solutions, particularly Adobe Experience Manager (AEM). Beyond implementation, I enjoy bridging ideas and execution: collaborating with directors, architects, and international teams to turn complex requirements into practical, maintainable solutions. I’m AWS Certified, an Adobe Certified AEM Developer, and continuously expanding my skills across cloud, backend, and modern JavaScript frameworks. I thrive in environments where I can keep learning, take ownership, and create meaningful digital experiences.
                           <br /> Let’s build something impactful.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;