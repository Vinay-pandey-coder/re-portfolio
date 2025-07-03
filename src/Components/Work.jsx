import React from 'react'

import ProjectCard from './ProjectCard';


const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Wether app',
    tags: ['API', 'Development'],
    projectLink: 'https://vinay-pandey-coder.github.io/weather-app/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Calculator app',
    tags: ['Development'],
    projectLink: 'https://vinay-pandey-coder.github.io/calculator/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'User Card',
    tags: ['Development', 'API'],
    projectLink: 'https://vinay-pandey-coder.github.io/user-card/'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'TODO App',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://vinay-pandey-coder.github.io/To-Do-list/'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://vinay-pandey-coder.github.io/e-commerce/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Qr-code',
    tags: ['API', 'Development'],
    projectLink: 'https://vinay-pandey-coder.github.io/Qr-code-/'
  },
];

const Work = () => {
  return (
    <section id='work' className='section pt-20 lg:pt-32'>
         <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl">
            <h2 className="headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold reveal-up translate-y-20 opacity-0 mb-8">
                My portfolio highlights
            </h2>
            
            <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc,title,tags,projectLink},key) =>(
                        <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink} 
                        classes="reveal-up translate-y-20 opacity-0"  
                        />
                    ))
                }
            </div>
         </div>
    </section>
  )
}

export default Work