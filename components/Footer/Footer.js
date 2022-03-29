import React from 'react';
import Image from 'next/image'

function Footer() {
    return (
        <div id="footer-container" className="container-fluid">
            <div className="container">
                <div className="row footer-logo-container">
                    <div className="pt-4 pb-2 pb-lg-4  px-lg-0 col">
                        <div className="site-footer d-flex flex-nowrap align-items-center">
                            <div className="site-footer-logo">
                                <a href="">
                                    <Image
                                        src={"/img/un-emblem-white.svg"}
                                        alt="Money Laundering Cycle"
                                        width={50}
                                        height={50}
                                    />
                                    {/* <img className="img-responsive" alt="United Nations Office on Drugs and Crime" src="/cdn/shared/standard/images/un-emblem-white.svg" /> */}
                                </a>
                            </div>
                            <div className="site-footer-title px-2">
                                <a href="">
                                    United Nations Office on Drugs and Crime
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-nav-container">
                    <div className="py-3 px-0 col">
                        <div className="footer-nav">
                            <ul>
                                <li className='me-3'>
                                    <a href="">Home</a>
                                </li>
                                <li className='me-3'>
                                    <a href="">Contacts</a>
                                </li>
                                <li>
                                    <a href="">Fraud Alert</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer