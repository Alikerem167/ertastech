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
                        
                        <li>
                            <Link className="nav-link" href="/case-studies">
                                Referanslarımız
                            </Link>
                        </li>
                        
                        <li className="has-dropdown ">
                            <Link className="nav-link" href="/blog-list">
                                Blog <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                            
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