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
                            <Link className="nav-link" href="#">
                                Demos
                                <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                            <ul className="submenu parent-nav with-border">
                                <li>
                                    <Link href="/">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                        Home One
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/index-two">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />{" "}
                                        Home Two
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/index-three">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />{" "}
                                        Home Three
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/index-four">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />{" "}
                                        Home Four
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/index-five">
                                        <i className="fa-sharp fa-regular fa-chevron-right" />{" "}
                                        Home Five
                                    </Link>
                                </li>
                            </ul>
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
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-single">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Services Single
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
                                                    <Link href="/case-studies-single">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Case Studies Single
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/why-choose-us">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Why Choose Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/career">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Career
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/career-single">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Career Single
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/industry">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Industry
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link href="/apply">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Apply
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Team
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team-single">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Team Single
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/faq">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Faq
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/coming-soon">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Coming Soon
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link href="/partner">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Our Partner
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/award">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Award
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/free-consultation">
                                                        <i className="fa-sharp fa-regular fa-chevron-right" />
                                                        Free Consultation
                                                    </Link>
                                                </li>
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
                                Case Studies
                            </Link>
                        </li>
                        <li className="has-dropdown position-static with-megamenu">
                            <Link className="nav-link" href="/service">
                                Service{" "}
                                <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                            <div className="submenu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/service-single"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/22.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Cloud Migration</h4>
                                                            <p>Moving data to cloud infrastructure.</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/it-strategies"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/23.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">IT Strategies</h4>
                                                            <p>Alignment, Innovation Scalability.</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/cyber-security-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/24.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Cyber Security</h4>
                                                            <p>Protecting data software and networks.</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/technologies-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/25.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Technologies</h4>
                                                            <p>Empowering, innovative, transformative.</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/it-consulting-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/26.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">
                                                                IT Consulting Service
                                                            </h4>
                                                            <p>
                                                                Expertise-driven technology problem-solving.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/development-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/27.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Development</h4>
                                                            <p>
                                                                Creating innovative solutions through
                                                                technology.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/ai-learning-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/28.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">AI Learning</h4>
                                                            <p>
                                                                Empowering machines to mimic intelligence.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/management-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/29.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Management</h4>
                                                            <p>Organizing resources to achieve goals</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/it-innovations"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/30.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">IT Innovations</h4>
                                                            <p>
                                                                Transforming ideas into digital solutions.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav industry-signle-menu">
                                                <li className="parent-top-industry">
                                                    <p>Industries</p>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/construction-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Constructions
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/healthcare-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        HealthCare
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/ecommerce-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Retail &amp; E-Commerce
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/fintech-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Fintech
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/logistic-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Logistics &amp; Automotive
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="industries"
                                                        href="/travel-industry"
                                                    >
                                                        <ReactSVG
                                                            src="/assets/images/icons/arrow-right.svg"
                                                            alt="arrow"
                                                        />
                                                        Travel &amp; Hospitality
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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