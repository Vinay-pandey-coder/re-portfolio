import React, { useRef ,useEffect } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({navOpen}) => {

    const lastActiveLink = useRef()
    const activeBox = useRef()

    const initActiveBox = () => {
          activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
          activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
          activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
          activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(initActiveBox, [])
    window.addEventListener('resize', initActiveBox)

    const  activeCurrentLink = (event) =>{
           lastActiveLink.current?.classList.remove('active');
           event.target.classList.add('active');
           lastActiveLink.current = event.target

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];

  return (
<nav className={
  'navbar absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-50/10 rounded-2xl ring-inset ring-1 ring-zinc-50/5 scale-90 isolate opacity-0 invisible transition-[opacity,transform,filter] backdrop-blur-2xl flex flex-col md:static md:flex-row md:items-center md:mt-0 md:opacity-100 md:blur-0 md:visible md:scale-100'
  + (navOpen ? ' active opacity-100 scale-100 blur-0 visible' : '')
}>
       {
        navItems.map(({label,link,className,ref}, key) =>(
            <a 
            href={link}
            key={key}
            ref={ref} 
            className={className}
            onClick={activeCurrentLink}
            >
            {label}
            </a>
        ))
       }

       <div 
       className="active-box absolute bg-zinc-50 rounded-lg -z-10 transition-[top,left] duration-500"
       ref={activeBox}
       >

       </div>
    </nav>
  )
}

Navbar.PropTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar