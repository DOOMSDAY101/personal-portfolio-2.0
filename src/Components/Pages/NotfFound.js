import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from './SEO'

import './NotFound.css'

function NotfFound() {
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

    return (
        <div className='not-found'>
            <SEO title="404 | PAGE NOT FOUND" description="The requested page doesn't seem to exist. Please check that the Web site address is spelled correctly. Or navigate to the home page" />
            <div className='animate-reveal' >
                <motion.h1 className='not-found-text' variants={animationVariants} initial="hidden" animate="visible">404 NOT  <br className='br' />  FOUND</motion.h1>
                <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
            </div>
            <div className='animate-reveal'>
                <motion.p variants={animationVariants} initial="hidden" animate="visible">The requested page doesn't seem to exist.</motion.p>
                <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
            </div>
            <div className='animate-reveal'>
                <motion.p variants={animationVariants} initial="hidden" animate="visible">Please check that the Web site address is spelled correctly.</motion.p>
                <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
            </div>
            <div className='animate-reveal'>
                <motion.p variants={animationVariants} initial="hidden" animate="visible">Or Navigate to the <Link to='/' className='not-found-link'>home page</Link></motion.p>
                <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeIn' }} style={{ position: 'absolute', background: '#4d5bce', top: 4, bottom: 4, right: 0, left: 0, zIndex: 20 }}></motion.div>
            </div>
            <p style={{ color: '#011627' }}>.</p>
        </div>
    )
}

export default NotfFound
