import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/html.svg',
    label: 'Html',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
    {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  }
];

const Skills = () => {
  return (
    <section className='pt-20 lg:pt-32'>
         <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl">
             
           <h2 className="headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold reveal-up translate-y-20 opacity-0">
            Essential Tools I use
           </h2>

           <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up translate-y-20 opacity-0">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
           </p>

           <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
              skillItem.map(({imgSrc,label,desc},key) =>(
                <SkillCard
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up translate-y-20 opacity-0"
                />
              ))
            }
           </div>

         </div>
    </section>
  )
}

export default Skills