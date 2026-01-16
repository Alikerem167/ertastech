"use client"
import React from 'react'
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function Nav() {
    return (
        <div>
            <div className="nav-area">
                <nav>
                    <ul>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="/index-four">
                                Ana Sayfa
                                <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                           
                        </li>
                        <li className="has-dropdown position-static with-megamenu margin-single-0">
                            <Link className="nav-link" href="/#">
                                Pages
                                <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                            <div className="submenu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link href="/about">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Hakkımızda
                                                    </Link>
                                                </li>
                                                
                                                
                                                <li>
                                                    <Link href="/case-studies">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Case Studies
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/privacy-policy">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                      
                                        
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                
                                               
                                               
                                                <li>
                                                    <Link href="/terms-of-use">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Terms Of Use
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/404">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Error
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className="nav-link" href="/case-studies">
                                Referanslarımız
                            </Link>
                        </li>
                        
                        <li className="has-dropdown ">
                            <Link className="nav-link" href="/#">
                                Blog <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                            <ul className="submenu parent-nav with-border">
                                <li>
                                    <Link href="/blog-list">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                        Blog List
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                        Blog Grid
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid-two">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                        Blog Grid Two
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid-four">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                        Blog Grid Three
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-masonry">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                        Blog Masonry
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid/protecting-your-business">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                        Blog Details
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav