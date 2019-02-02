import React, { Component } from 'react';
import './statistics.css';

const Statistics = () => (
    <div className='statistics'>
        <div className='statCont'>
            <div className='statContImg1'></div>
            <p className='number'>3587</p>
            <p className='statContText'>Satisfied Clients</p>
            <div className='statContStick'></div>
        </div>
        <div className='statCont'>
            <div className='statContImg2'></div>
            <p className='number'>207</p>
            <p className='statContText'>Cups of coffee</p>
            <div className='statContStick'></div>
        </div>
        <div className='statCont'>
            <div className='statContImg3'></div>
            <p className='number'>2500</p>
            <p className='statContText'>Blog posts</p>
            <div className='statContStick'></div>
        </div>
        <div className='statCont'>
            <div className='statContImg4'></div>
            <p className='number'>837</p>
            <p className='statContText'>Likes</p>
            <div className='statContStick'></div>
        </div>
        <div className='statCont'>
            <div className='statContImg5'></div>
            <p className='number'>900</p>
            <p className='statContText'>We launched</p>
            <div className='statContStick'></div>
        </div>
    </div>
)

export default Statistics;