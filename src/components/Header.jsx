import { useClickOutside } from '../util/useClickOutside';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { useState, useEffect, useRef } from 'react';
import { navigation } from '../constants/data';
import { NavMobile } from '.';
import Logo from '../assets/img/logo.svg';

const Header = () => {

  const mobileMenuRef = useRef(null);

  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useClickOutside(mobileMenuRef, setMobileNav);

  useEffect(() => {
    // add event listener
    window.addEventListener('scroll', () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header>

      <div className={`fixed left-0 py-8 z-10 w-full transition-all duration-200 
      ${bg
          ? 'bg-[rgba(120,120,120,0.4)] py-4 lg:py-6 backdrop-blur-md'
          : 'bg-none'
        }`}>

        <div className='container mx-auto'>
          <div className='flex justify-between items-center' >

            {/* logo */}
            <a href='#home'>
              <img className='h-6 lg:h-8' src={Logo} alt='logo' />
            </a>

            {/* 💻💻💻 Desktop - Navigation Menu 💻💻💻 */}
            <nav className='hidden md:flex'>
              <ul className='md:flex md:gap-x-12'>
                {
                  navigation.map((item, index) => (
                    <li key={index}>
                      <a
                        className={`capitalize hover:border-b transition-all  
                        ${bg
                            ? 'text-black text-lg font-semibold border-b-black'
                            : 'text-white'
                          }`}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>


            {/* 📳📳📳 Mobile - Navigation Menu Icon 📳📳📳 */}
            <div
              className='md:hidden text-2xl lg:text-3xl text-white cursor-pointer duration-300'
              onClick={() => setMobileNav(!mobileNav)}
            >
              {
                mobileNav
                  ? <CgClose className='text-red-600' />
                  : <CgMenuRight className={`${bg ? 'text-black' : 'text-white'}`} />
              }
            </div>

          </div>
        </div>

      </div>


      {/* 📳📳📳 Mobile - Navigation Menu 📳📳📳 */}
      <div ref={mobileMenuRef}
        className={`md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all z-20
              ${mobileNav ? 'left-0' : '-left-full'} `}
      >
        <NavMobile setMobileNav={setMobileNav} />
      </div>


    </header>
  );
};

export default Header;