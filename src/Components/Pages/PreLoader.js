import React, { useEffect } from 'react'
import './PreLoader.css'
import { preLoaderAnim } from './PreLoaderAnim'

export default function PreLoader() {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
        <div className='preloader'>
            <div className='texts-container'>
                <span style={{ color: '#4d5bce' }}>Developer,</span>
                <span style={{ color: '#43d9ad' }}>Freelancer,</span>
                <span style={{ color: '#e99287' }}>Fullstack.</span>
            </div>
        </div>
    )
}
