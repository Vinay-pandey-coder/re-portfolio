import React from 'react'

import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Vinay-pandey-coder'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vinay-pandey-915310338/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/VinayPa53449427'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codeby_pandey/?hl=en'
  }
];

const Footer = () => {
  return (
    <footer 
    className='section pt-20 lg:pt-32'>
           <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl">

            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15] max-w-max sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10  reveal-up translate-y-20 opacity-0">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary 
                       href="mailto:abhi837688@gmail.com"
                       label="Start Project"
                       icon="chevron_right"
                       classes=" reveal-up translate-y-20 opacity-0"
                    />
                </div>

                <div className=" grid grid-cols-2 gap-4 lg:pl-20 ">

                    <div>
                        <p className="mb-2  reveal-up translate-y-20 opacity-0">Sitmap</p>

                        <ul>
                            {
                                sitemap.map(({label,href},key) =>(
                                    <li key={key}>
                                        <a 
                                        href={href} 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200  reveal-up translate-y-20 opacity-0"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2  reveal-up translate-y-20 opacity-0">socials</p>

                        <ul>
                            {
                                socials.map(({label,href},key) =>(
                                    <li key={key}>
                                        <a 
                                        href={href} 
                                        target='_blank'
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200  reveal-up translate-y-20 opacity-0"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                href="/" 
                className="logo reveal-up translate-y-20 opacity-0"
                >
                    <img 
                    src="/images/logo.svg"
                    width={40}
                    height={40} 
                    alt="logo" 
                    />
                </a>

                <p className="text-zinc-500 text-sm  reveal-up translate-y-20 opacity-0">
                    &copy; 2025 <span className="text-zinc-200">Vinay Pandey</span>
                </p>
            </div>

           </div>
    </footer>
  )
}

export default Footer