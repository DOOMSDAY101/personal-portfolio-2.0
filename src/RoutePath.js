import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Pages/Layout';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import NotfFound from './Components/Pages/NotfFound';
import Home from './Components/Pages/Home';
import SEO from ./components/Pages/SEO;

function RoutePath() {
    return (
        <div>
        <SEO title="Ifeoluwa Sulaiman | Homepage" description="Welcome to my portfolio! I'm a dedicated and passionate fullstack web developer specializing in in crafting stunning and intuitive websites. With expertise in frontend technologies like React, and Javascript, as well as backend frameworks like Node.js, I bring creative designs to life while ensuring seamless functionality and exceptional user experiences. Explore my diverse range of projects to see how I combine innovation, usability, and performance to deliver results. Whether you need a responsive website, custom web application, or eCommerce platform, I'm here to turn your vision into reality. Let's connect and collaborate on your next web development project!" />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='project' element={<Projects />}></Route>
                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='*' element={<NotfFound />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default RoutePath
