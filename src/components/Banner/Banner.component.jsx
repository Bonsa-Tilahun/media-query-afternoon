import React from 'react'

import './banner.styles.css'

const Banner = () => {
    return(
        <div className='banner-container'>
            <div className='Intro-container'>
                <div className='Intro-text'>
                    <div className='welcom-text'>
                        Welcome To Our Studio!
                    </div>
                    <div className='welcom-followup-text'>
                        IT'S NICE TO MEET YOU
                    </div>
                </div>
                <a className='Intro-btn' href='#'>TELL ME MORE</a>
            </div>
        </div>
    )
}

export default Banner