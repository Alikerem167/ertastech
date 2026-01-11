"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuhome) => {
    setOpenMenu(openMenu === menuhome ? null : menuhome);
  };


  return (
    <div>
      <div id="side-bar" className={`side-bar header-two ${isSidebarOpen ? 'show' : ''}`}>
        <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
          <i className="far fa-times"></i>
        </button>
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(1)}>
                  Home
                </Link>
                <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                  <li>
                    <Link href="/index">Home One</Link>
                  </li>
                  <li>
                    <Link href="/index-two">Home Two</Link>
                  </li>
                  <li>
                    <Link href="/index-three">Home Three</Link>
                  </li>
                  <li>
                    <Link href="/index-four">Home Four</Link>
                  </li>
                  <li>
                    <Link href="/index-five">Home Five</Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(2)}>
                  Pages
                </Link>
                <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                  <li>
                    <Link href="/service-single">Services Single</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/case-studies-single">Case Studies Single</Link>
                  </li>
                  <li>
                    <Link href="/why-choose-us">Why Choose Us</Link>
                  </li>
                  <li>
                    <Link href="/career">Career</Link>
                  </li>
                  <li>
                    <Link href="/career-single">Career Single</Link>
                  </li>
                  <li>
                    <Link href="/industry">Industry</Link>
                  </li>
                  <li>
                    <Link href="/apply">Apply</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/team-single">Team Single</Link>
                  </li>
                  <li>
                    <Link href="/faq">Faq</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Coming Soon</Link>
                  </li>
                  <li>
                    <Link href="/partner">Our Partner</Link>
                  </li>
                  <li>
                    <Link href="/award">Award</Link>
                  </li>
                  <li>
                    <Link href="/free-consultation">Free Consultation</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link href="/404">Error</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="case-studies" className="main">
                  Case Studies
                </Link>
              </li>
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(3)}>
                  Services
                </Link>
                <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                  <li>
                    <Link href="/service">Service</Link>
                  </li>
                  <li>
                    <Link href="/service-single">Cloud Migration</Link>
                  </li>
                  <li>
                    <Link href="/it-strategies">IT Strategies</Link>
                  </li>
                  <li>
                    <Link href="/cyber-security-service">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/technologies-service">Technologies</Link>
                  </li>
                  <li>
                    <Link href="/it-consulting-service">IT Consulting</Link>
                  </li>
                  <li>
                    <Link href="/development-service">Development</Link>
                  </li>
                  <li>
                    <Link href="/ai-learning-service">AI Learning</Link>
                  </li>
                  <li>
                    <Link href="/management-service">Management Service</Link>
                  </li>
                  <li>
                    <Link href="/it-innovations">IT Innovations</Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(4)}>
                  Blog
                </Link>
                <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                  <li>
                    <Link href="/blog-list">Blog List</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid-two">Blog Grid Two</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid-four">Blog Grid Three</Link>
                  </li>
                  <li>
                    <Link href="/blog-masonry">Blog Masonry</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="contact" className="main">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="rts-social-border-area right-sidebar mt--80">
            <ul>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-pinterest" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile menu area end */}
      </div>

    </div>
  )
}

export default SideBar