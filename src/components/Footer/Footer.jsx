import React from 'react';
import iconEmail from '../../assets/images/logo-email.png';
import iconGithub from '../../assets/images/logo-github.png';
import iconLinkedin from '../../assets/images/logo-linkedin.png';


function Footer() {
    return (
        <div>
            <img src={iconEmail} alt='Email icon' />
            <img src={iconGithub} alt='GitHub icon' />
            <img src={iconLinkedin} alt='LinkedIn icon' />
        </div>
    );
}

export default Footer;