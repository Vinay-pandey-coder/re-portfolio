import { ButtonPrimary , ButtonOutline  } from './Button'

const Hero = () => {
  return (
    <section id='home' 
    className='pt-28 lg:pt-36'
    >
   
   <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 px-4 mx-auto lg:px-8 xl:max-w-6xl">

    <div>
         <div className=" flex items-center gap-3">
            <figure className='imag-box w-9 h-9 rounded-lg bg-zinc-700 overflow-hidden'>
                <img 
                src="/images/avatar-1.jpg"
                width={40}
                height={40} 
                alt="vinay pandey"
                className='img-cover w-full h-full object-cover' 
                />
            </figure>

            <div className=" flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className=" relative w-2 h-2 rounded-full bg-emerald-400">
                    <span className=" absolute bg-emerald-400 inset-0 rounded-full animate-ping"></span>
                </span>

                Available for work
            </div>
         </div>

         <h2 className="headline-1 text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15] max-w-max sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
         </h2>

         <div className=" flex items-center gap-3
         ">
            <ButtonPrimary 
              label="Download CV"
              icon="download"
              href="/CV/VINAY PANDEY resume.pdf"
              target='_blank'
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"  
            />
         </div>
    </div>

    <div className="hidden lg:block">
        <figure className=" w-full max-w-[480px ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-60% rounded-[60px] overflow-hidden">
            <img 
            src="/images/hero-banner.png"
            width={656}
            height={800} 
            alt="vinay pandey"
            className='w-full' 
            />
        </figure>
    </div>

   </div>

    </section>
  )
}

export default Hero