import React from 'react';
import { useQuery } from 'react-query';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import ProjectsCard from './ProjectsCard';

const Allprojects = () => {

    const { data: projects, isLoading } = useQuery("projects", () => fetch("https://blooming-badlands-86390.herokuapp.com/projects").then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div className='bg-[#2D2E32]'>
            <div className='min-h-screen w-11/12 lg:w-4/5 mx-auto'>
                <div className='flex items-center p-5'>
                    <h3 className='text-white text-3xl whitespace-nowrap mr-3'>All Projects</h3>
                    <hr className='w-full border-none h-[2px] bg-[#57c78e]' />
                </div>
                <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {projects.map(project => <ProjectsCard key={project._id} project={project}></ProjectsCard>)}
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Allprojects;