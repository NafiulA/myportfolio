import { faArrowUpRightFromSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectsCard = ({ project }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="300" className="card w-full bg-[#16191E] shadow-xl">
            <figure><img className='hover:scale-105 overflow-hidden transition-all duration-500 ease-in-out' src={project.img} alt="project screenshot" /></figure>
            <div className="card-body">
                <div className='flex items-center gap-3'>
                    <a href={project.live} target="_blank" rel="noreferrer" className="card-title text-white hover:text-[#57c78e] transition-all duration-500">
                        {project.name}
                    </a>
                    <FontAwesomeIcon className='text-[#57C78E]' icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
                </div>
                <div>
                    <a className='px-2 rounded-full bg-slate-700 text-sm text-gray-400 mr-2 hover:text-[#57C78E] transition-all duration-300 ease-in-out' href={project.client} target="_blank" rel="noreferrer"><span className='mr-2'>Client Repo
                    </span>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                    </a>
                    {project.server && <a className='px-2 rounded-full bg-slate-700 text-sm text-gray-400 mr-2 hover:text-[#57C78E] transition-all duration-300 ease-in-out' href={project.server} target="_blank" rel="noreferrer"><span className='mr-2'>Server Repo
                    </span>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                    </a>}
                </div>
                <p className='text-white'>{project.description}</p>
                <div className="card-actions justify-end my-2">
                    {project.techs.map((tech, index) => <div className="badge text-gray-400 bg-[#4E4D53]" key={index}>{tech}</div>)}
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;