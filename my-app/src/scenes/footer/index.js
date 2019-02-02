import React, { Component } from 'react';
import './footer.css'

const Footer = () => (
    <div className='footer'>
        <div className='footerDiv1'>
            <p className='footerDiv1Text'>Copyright © 2015 <span className='spanFooter'>Waxom</span></p>
            <div className='footerChoise1'>
                <ul>
                    <li>
                        <a>Privacy Policy</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                    <li>
                        <a>Support</a>
                    </li>
                </ul>
            </div>
        </div>
        <p className='footerText'>Designed by <span className='spanFooter'>ThemeFire</span>   |   Only on <span className='spanFooter'>Envato Market</span></p>
    </div>
)

export default Footer;