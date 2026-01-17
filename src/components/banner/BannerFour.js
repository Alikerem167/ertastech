"use client"
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import { ReactSVG } from 'react-svg';
import "aos/dist/aos.css";

function BannerFour() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);

    return (
        <div>
            {/* rts banner four start */}
            <div className="banner-four-area banner-four-bg rts-section-gap jarallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-four-wrapper">
                                <div className="inner-left">
                                    <h1
                                        className="title"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="1000"
                                        data-i18n="bannerfour_title"
                                    >
                                        Biz Kimiz?
                                    </h1>

                                    <p
                                        className="disc"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        data-aos-duration="1000"
                                        data-i18n="bannerfour_desc"
                                    >
                                        Ertastech olarak, sorunlarınızı çözmek için yenilikçi ve özelleştirilmiş yazılım çözümleri sunuyoruz. Beraberinde ise hizmet verdiğimiz alanlarda uzman ekibimizle problemlerinizi yüksek başarı ile çözümlüyor ve mutluluğunuzu amaçlıyoruz.
                                    </p>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape wow toBottomLeft">
                    <img src="assets/images/banner/01.png" alt="banner" />
                </div>
            </div>
            {/* rts banner four end */}
        </div>
    )
}

export default BannerFour
