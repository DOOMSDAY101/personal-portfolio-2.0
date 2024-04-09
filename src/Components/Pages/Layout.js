import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import TwitterIcon from 'remixicon-react/TwitterFillIcon'
import FacebookIcon from 'remixicon-react/FacebookFillIcon'
import LinkedInIcon from 'remixicon-react/LinkedinFillIcon'
import GithubIcon from 'remixicon-react/GithubFillIcon'

function Layout() {
    const location = useLocation()

    //FUNCTION TO HANDLE TO NAV MENU BTN CLICK
    let [menuOpen, setMenuOpen] = useState(false);
    function handleToggle() {
        setMenuOpen(!menuOpen)
    }

    function closeMobileNav() {
        setMenuOpen(false)
    }
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
            },
        }),
    };

    const fadeInAnimationVariantsFooter = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
            },
        }),
    };


    const animationForMobileNavLi = {
        opened: {
            y: 0,
            opacity: 1,
            transition: {
                y: {
                    stiffnesss: 1000, velocity: -100,
                }

            }
        },
        closed: {
            y: 80,
            opacity: 0,
            transition: {
                y: { stiffnesss: 1000 }
            }
        }
    }

    useEffect(() => {

        let body = document.querySelector('body');

        if (menuOpen) {
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
        }
    }, [menuOpen])
    return (
        <div>
            <header>
                <motion.span variants={fadeInAnimationVariants} initial="initial" animate="animate" custom={1}><Link to='/' className='logo'>Ifeoluwa-Sulaiman</Link></motion.span>
                {/** MENU BURGER FOR MOBILE BEGIN*/}
                <div className={`${"menu-btn"} ${menuOpen ? "opened" : ""}`} onClick={handleToggle}>
                    <div className='menu-btn_burger'></div>
                </div>
                {/** MENU BURGER FOR MOBILE END*/}

                <nav className='nav-bar'>
                    <ul>
                        <motion.li variants={fadeInAnimationVariants} initial="initial" animate="animate" custom={2}><Link to='/' className={location.pathname === '/' ? 'active-link' : ""}>_hello</Link></motion.li>
                        <motion.li variants={fadeInAnimationVariants} initial="initial" animate="animate" custom={3}><Link to='/about' className={location.pathname === '/about' ? 'active-link' : ""}>_about-me</Link></motion.li>
                        <motion.li variants={fadeInAnimationVariants} initial="initial" animate="animate" custom={4}><Link to='/project' className={location.pathname === '/project' ? 'active-link' : ""}>_projects</Link></motion.li>

                    </ul>
                </nav>
                <nav className='nav-bar nav-bar-1'>
                    <ul>
                        <motion.li variants={fadeInAnimationVariants} initial="initial" animate="animate" custom={5}><Link to='/contact' className={location.pathname === '/contact' ? 'active-link' : ""}>_contact-me</Link></motion.li>
                    </ul>
                </nav>
                <div className={`${"nav-bar-mobile"} ${menuOpen ? "active" : ""}`}>
                    <nav className='nav-bar-mobile-nav'>
                        <ul>
                            <motion.li variants={animationForMobileNavLi} animate={menuOpen ? "opened" : "closed"}><Link to='/' onClick={closeMobileNav}>_hello</Link></motion.li>
                            <motion.li variants={animationForMobileNavLi} animate={menuOpen ? "opened" : "closed"}><Link to='/about' onClick={closeMobileNav}>_about-me</Link></motion.li>
                            <motion.li variants={animationForMobileNavLi} animate={menuOpen ? "opened" : "closed"}><Link to='/project' onClick={closeMobileNav}>_projects</Link></motion.li>
                            <motion.li variants={animationForMobileNavLi} animate={menuOpen ? "opened" : "closed"}><Link to='/contact' onClick={closeMobileNav}>_contact-me</Link></motion.li>
                        </ul>
                    </nav>
                </div>
            </header>

            {<Outlet />}

            <footer className='footer'>
                <motion.span variants={fadeInAnimationVariantsFooter} initial="initial" animate="animate" custom={1} className='footer-cta-socials'>find me on: </motion.span>
                <div className='footer-socials'>
                    <div className='icons-div'>
                        <motion.a variants={fadeInAnimationVariantsFooter} initial="initial" animate="animate" custom={2} href='https://twitter.com/Sulaiman_Ife' target='_blank' rel='noreferrer' className='icons icons-1'>
                            <TwitterIcon className='socials-icons' />
                        </motion.a>
                        <motion.a variants={fadeInAnimationVariantsFooter} initial="initial" animate="animate" custom={3} href='https://facebook.com/ifeoluwa.sulaimon.92' target='_blank' rel='noreferrer' className='icons'>
                            <FacebookIcon className='socials-icons' />
                        </motion.a>
                        <motion.a variants={fadeInAnimationVariantsFooter} initial="initial" animate="animate" custom={4} href='https://www.linkedin.com/in/ifeoluwa-sulaiman-307893262' target='_blank' rel='noreferrer' className='icons icons-1'>
                            <LinkedInIcon className='socials-icons' />
                        </motion.a>
                    </div>
                    {/** */}
                    <div className='icons-div'>
                        <motion.a variants={fadeInAnimationVariantsFooter} initial="initial" animate="animate" custom={5} href='https://github.com/DOOMSDAY101' target='_blank' rel='noreferrer' className='icons-2'>
                            <span className='username'>@doomsday101</span> <GithubIcon className='socials-icons' />
                        </motion.a>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Layout
