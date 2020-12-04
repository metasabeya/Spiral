import React from 'react';

function Footer() {
    return (
        <div className='footer-container'>
            <p className="footer-creation">
                Created by
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your email" />
                </form>
            </div>
        </div>
    );
}

export default Footer;