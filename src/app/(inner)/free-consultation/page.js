"use client"
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import Testimonials from "@/components/testimonials/Testimonials";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);
    return (
        <div className='#'>
            <HeaderTwo />

            <>
                <div className="rts-career-banner-area rts-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="career-banner-wrapper">
                                    <h1 className="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                        Empowering Businesses with Expert IT Solutions
                                    </h1>
                                    <p className="disc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        We believe that our people are our greatest asset. We are
                                        committed to fostering a collaborative, inclusive, and dynamic
                                        work environment where every team member can thrive. If you are
                                        passionate about technology and dedicated to delivering
                                        exceptional IT solutions, we want to hear from you!
                                    </p>
                                    <a href="#" className="rts-btn btn-primary btn-bold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        Current Openings
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 pl--30 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                                <div
                                    className="thumbnail-top thumbnail-consultancy" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100"
                                >
                                    <img
                                        className="jarallax-img"
                                        src="assets/images/consultancy/02.webp"
                                        alt="career"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultancy-bottom rts-section-gapBottom career-two-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pr--40 pr_md--15 pr_sm--10">
                                <div className="thumbnail-consultancy" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                                    <img
                                        className="jarallax-img"
                                        src="assets/images/consultancy/01.webp"
                                        alt="consultancy"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 pt_md--50 mt_sm--30">
                                <div className="career-right-two-wrapper">
                                    <h2 className="title">
                                        Our IT Consulting &amp; <br /> Advisory Services
                                    </h2>
                                    <p>
                                        We offer tailored IT consulting and advisory services designed to
                                        help businesses thrive in an ever-evolving digital landscape.
                                        Whether you are modernizing your infrastructure, optimizing
                                        processes.
                                    </p>
                                    <div className="check-wrapper-main">
                                        <div className="single-wrapper">
                                            <div className="check-wrapper">
                                                <div className="single-check">
                                                    <img src="assets/images/service/01.svg" alt="service" />
                                                    <p> IT Strategy Development</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>Digital Transformation Consulting</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>Infrastructure Optimization</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>Cybersecurity &amp; Risk Management</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>Enhancing Data-Driven Decisions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-solution-area rts-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-center-style-two">
                                    <h2 className="title">Step-by-Step to Excellence</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-consulting mt--80 mt_sm--30">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="consulting-step">
                                    <div className="timeline-line" />
                                    <div className="single-consulting-one">
                                        <div className="thumbnail">
                                            <img src="assets/images/consultancy/03.webp" alt="consulting" />
                                        </div>
                                        <div className="right-area">
                                            <h4 className="title">Discovery Phase</h4>
                                            <p>
                                                Understanding your business <br /> goals and challenges.
                                            </p>
                                        </div>
                                        <div className="timeline-dot">
                                            <div className="time-line-circle" />
                                        </div>
                                    </div>
                                    <div className="single-consulting-one">
                                        <div className="thumbnail">
                                            <img src="assets/images/consultancy/04.webp" alt="consulting" />
                                        </div>
                                        <div className="right-area">
                                            <h4 className="title">Analysis</h4>
                                            <p>
                                                Starting in knowing your business <br /> goals and challenges.
                                            </p>
                                        </div>
                                        <div className="timeline-dot">
                                            <div className="time-line-circle" />
                                        </div>
                                    </div>
                                    <div className="single-consulting-one">
                                        <div className="thumbnail">
                                            <img src="assets/images/consultancy/05.webp" alt="consulting" />
                                        </div>
                                        <div className="right-area">
                                            <h4 className="title">Strategy Design</h4>
                                            <p>Crafting a customized IT roadmap.</p>
                                        </div>
                                        <div className="timeline-dot">
                                            <div className="time-line-circle" />
                                        </div>
                                    </div>
                                    <div className="single-consulting-one">
                                        <div className="thumbnail">
                                            <img src="assets/images/consultancy/06.webp" alt="consulting" />
                                        </div>
                                        <div className="right-area">
                                            <h4 className="title">Implementation</h4>
                                            <p>
                                                Understanding your business <br /> goals and challenges.
                                            </p>
                                        </div>
                                        <div className="timeline-dot">
                                            <div className="time-line-circle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>





            <Testimonials />
            <div>
                <>
                    {/* shedule a  consultation start */}
                    <div className="shedule-a-consultation rts-section-gapTop">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="shedule-consulting-left">
                                        <h2 className="title">
                                            Let’s Bring Your <br /> Vision to Life
                                        </h2>
                                        <p className="disc">
                                            We’re here to help you tackle challenges, explore possibilities,
                                            and achieve your goals with tailored solutions. Take the first
                                            step by scheduling a free consultation with our experts.
                                        </p>
                                        <div className="check-wrapper">
                                            <p className="top">What’s Included in Your Free Consultation?</p>
                                            <div className="single-wrapper">
                                                <div className="check-wrapper">
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p> A personalized session to understand your needs.</p>
                                                    </div>
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Professional insights and recommendations.</p>
                                                    </div>
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>No obligation—just valuable guidance.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="call">
                                                Call us at: <a href="#">+1 (555) 123-4567</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 mt_sm--30">
                                    <form action="#" className="consulting-form">
                                        <p>Schedule a Free Consultation</p>
                                        <div className="input-half-wrapper">
                                            <div className="single">
                                                <input type="text" placeholder="First name" required="" />
                                            </div>
                                            <div className="single">
                                                <input type="text" placeholder="Last name" required="" />
                                            </div>
                                        </div>
                                        <div className="input-half-wrapper">
                                            <div className="single">
                                                <input type="text" placeholder="Company email" required="" />
                                            </div>
                                            <div className="single">
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <input type="text" placeholder="How can we Help You?" />
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder="Write a Message "
                                            required=""
                                            defaultValue={""}
                                        />
                                        <button className="rts-btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* shedule a  consultation end */}
                </>


            </div>
            <FooterOne />
            <BackToTop />
        </div>
    );
}
