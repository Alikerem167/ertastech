"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
import { useEffect } from "react";
function CaseFive() {
  return (
    <div>

        {/* case studies start */}
        <div className="case-studies-area rts-section-gap position-relative">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="title-style-4-center">
                    <h2 className="title">Referanslarımız</h2>
                </div>
                </div>
            </div>
            <div className="row mt-0 g-80">
                <div
                className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                >
                <div className="single-case-studies">
                    <a href="/case-studies-single" className="thumbnail">
                    <img src="assets/images/case-studies/11.webp" alt="image" />
                    </a>
                    <div className="inner-content">
                    <span>Ticari Web Sitesi</span>
                    <a href="/case-studies-single">
                        <h3 className="title">Uygun Temizlik</h3>
                    </a>
                    <a href="/case-studies-single" className="rts-btn btn-border">
                        View case study
                        <ReactSVG
                        src="assets/images/service/icons/13.svg"
                        alt="arrow"
                        />
                    </a>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                >
                <div className="single-case-studies">
                    <a href="/case-studies-single" className="thumbnail">
                    <img src="assets/images/case-studies/12.webp" alt="image" />
                    </a>
                    <div className="inner-content">
                    <span>Shopify temelli ticaret sitesi</span>
                    <a href="/case-studies-single">
                        <h3 className="title">Bameman</h3>
                    </a>
                    <a href="/case-studies-single" className="rts-btn btn-border">
                        View case study
                        <ReactSVG
                        src="assets/images/service/icons/13.svg"
                        alt="arrow"
                        />
                    </a>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                >
                <div className="single-case-studies">
                    <a href="/case-studies-single" className="thumbnail">
                    <img src="assets/images/case-studies/13.webp" alt="image" />
                    </a>
                    <div className="inner-content">
                    <span>Otomasyon</span>
                    <a href="/case-studies-single">
                        <h3 className="title">X</h3>
                    </a>
                    <a href="/case-studies-single" className="rts-btn btn-border">
                        View case study
                        <ReactSVG
                        src="assets/images/service/icons/13.svg"
                        alt="arrow"
                        />
                    </a>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                >
                <div className="single-case-studies">
                    <a href="/case-studies-single" className="thumbnail">
                    <img src="assets/images/case-studies/14.webp" alt="image" />
                    </a>
                    <div className="inner-content">
                    <span>Siber Güvenlik</span>
                    <a href="/case-studies-single">
                        <h3 className="title">X</h3>
                    </a>
                    <a href="/case-studies-single" className="rts-btn btn-border">
                        View case study
                        <ReactSVG
                        src="assets/images/service/icons/13.svg"
                        alt="arrow"
                        />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="row mt--60">
                <div className="col-lg-12">
                <a
                    href="/case-studies"
                    className="rts-btn btn-border more-project-btn"
                >
                    Daha fazlası için tıklayın
                    <img src="assets/images/service/icons/13.svg" alt="arrow" />
                </a>
                </div>
            </div>
            </div>
        </div>
        {/* case studies end */}

    </div>
  )
}

export default CaseFive