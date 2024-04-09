import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import SEO from './SEO'

import HomePageImg from '../../images/project11.png'


function Home() {
    const animationVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.25
            }
        }

    }

    useEffect(() => {
        setTimeout(() => {
            hljs.highlightAll()
        }, [1000])
    }, [])

    const codeSnippet1 = `useEffect(() => {
    const storedLinks = localStorage.getItem('shorLink');
    const storedNewLinks = localStorage.getItem('newLinks');

    if (storedLinks && storedNewLinks) {
        setStorageData(JSON.parse(storedLinks));
        setNewLinks(JSON.parse(storedNewLinks));
        }
    }, [])`

    const codeSnippet2 = `const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -1100,
        behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 1100, 
        behavior: 'smooth' });
    }`

    const codeSnippet3 = `const { getDatabase } = require('firebase-admin/database');
const admin = require('../config/firebase-config');

const db = admin.database();
const ref = db.ref('Products');
const dbData = await ref.once('value', (snapshot) => {
    if (!snapshot.val()) {
        console.log('Error reading database')
    } else {
        console.log(snapshot.val)
    }
})`
    return (
        <div className="home-intro">
            <SEO title="IFEOLUWA | Homepage" image={HomePageImg} description="Welcome to my portfolio! I'm a dedicated and passionate fullstack web developer specializing in in crafting stunning and intuitive websites. With expertise in frontend technologies like React, and Javascript, as well as backend frameworks like Node.js, I bring creative designs to life while ensuring seamless functionality and exceptional user experiences. Explore my diverse range of projects to see how I combine innovation, usability, and performance to deliver results. Whether you need a responsive website, custom web application, or eCommerce platform, I'm here to turn your vision into reality. Let's connect and collaborate on your next web development project!" />
            <p className='inivicible-h1'>.</p>
            <div className="hero-section">
                <div className='animate-reveal'>
                    <motion.p variants={animationVariants} initial="hidden" animate="visible" className='section-hi'>Hey there 👋. I am</motion.p>
                    <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
                </div>
                <div className='animate-reveal'>
                    <motion.h1 variants={animationVariants} initial="hidden" animate="visible" className='hero-section-name'>Ifeoluwa <br className='br' /> Sulaiman</motion.h1>
                    <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
                </div>
                <div className='animate-reveal'>
                    <motion.h2 variants={animationVariants} initial="hidden" animate="visible" className='hero-section-role'><span className='arrow-right'>&gt;</span>Full-stack developer</motion.h2>
                    <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />

                <br className='mobile-show' />
                <br className='mobile-show' />
                <div className='animate-reveal'>
                    <motion.p variants={animationVariants} initial="hidden" animate="visible" className='language-snippet'>&#47;&#47; Find my profile on Github</motion.p>
                    <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
                </div>
                <div className='animate-reveal'>
                    <motion.p variants={animationVariants} initial="hidden" animate="visible" className='language-snippet-2'><span className='snippet-var'>const</span> <span className='snippet-var-name'>githubLink</span> = <q className='q'><a href='https://github.com/DOOMSDAY101' target='_blank' rel='noreferrer' className='snippet-link'>https://github.com/DOOMSDAY101</a></q></motion.p>
                    <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
                </div>
            </div>
            <div className='rounded-circle scale-up-center' id='shape-1'></div>
            <div className='rounded-circle scale-up-center animate-delay-2000' id='shape-2'></div>

            <div className='hero-section-snippet'>
                <div className='code-snippet-display' id='code-snippet-display-1'><pre><code className='language-javascript' id='remove-bgc'>{codeSnippet2}</code></pre></div>
                <div className='code-snippet-display'><pre><code className='language-javascript' id='remove-bgc'>{codeSnippet1}</code></pre></div>
                <div className='code-snippet-display' id='code-snippet-display-1'><pre><code className='language-javascript' id='remove-bgc'>{codeSnippet3}</code></pre></div>
            </div>
            <div id='shape-code-1' className='code-rounded-circle scale-up-center'></div>
            <div id='shape-code-2' className='code-rounded-circle scale-up-center animate-delay-2000'></div>
            <div id='shape-code-3' className='code-rounded-circle scale-up-center animate-delay-4000'></div>
        </div>
    )
}

export default Home
