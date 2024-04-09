import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Pages/Layout';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import NotfFound from './Components/Pages/NotfFound';
import Home from './Components/Pages/Home';

function RoutePath() {
    return (
        <div>
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
