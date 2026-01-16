"use client"
import React from 'react'
import { useEffect } from "react";
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function BlogFour() {
    return (
        <div>

            <div className="rts-blog-area rts-section-gap position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 mb--25">
                            <div className="blog-title-two-center text-center">
                                <h2 className="title">Blogumuz</h2>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                        >
                            <div className="single-blog-area-start border-none box-shadow-none ">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/01.webp" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span>Cloud Migration</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                Bulut Bilişim ve Cloud Migration Çözümleri
                                            </h3>
                                        </Link>
                                        <p className="disc">
                                            Bulut bilişim teknolojileriyle sistemlerinizi daha güvenli, hızlı ve ölçeklenebilir hale getirin. ErtasTech cloud migration çözümleri sayesinde altyapınızı modern bulut sistemlerine taşıyarak performans ve maliyet avantajı sağlayın.
                                        </p>
                                        <div className="bottom-author-area">
                                            <img src="assets/images/testimonials/01.png" alt="author" />
                                            <div className="author-area-info">
                                                <h6 className="title">Ertastech</h6>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                        >
                            <div className="single-blog-area-start border-none box-shadow-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/02.webp" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span>UX Design</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                UX Design ve Kullanıcı Deneyimi Çözümleri
                                            </h3>
                                        </Link>
                                        <p className="disc">
                                           Kullanıcı deneyimi (UX) odaklı tasarımlar ile web ve mobil projelerinizde etkileşimi artırın. ErtasTech UX design hizmetleri, kullanıcı davranışlarını analiz ederek dönüşüm oranlarını yükselten arayüzler sunar.
                                        </p>
                                        <div className="bottom-author-area">
                                            <img src="assets/images/testimonials/02.png" alt="author" />
                                            <div className="author-area-info">
                                                <h6 className="title">Ertastech</h6>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                        >
                            <div className="single-blog-area-start border-none box-shadow-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/03.webp" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span>Web Uygulaması</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                Web Uygulaması Geliştirme Hizmetleri
                                            </h3>
                                        </Link>
                                        <p className="disc">
                                            İşletmelere özel web uygulaması geliştirme çözümleriyle dijital süreçlerinizi yönetin. Güvenli, hızlı ve ölçeklenebilir web yazılım sistemleri sayesinde iş verimliliğinizi artırın.
                                        </p>
                                        <div className="bottom-author-area">
                                            <img src="assets/images/testimonials/07.png" alt=" author" />
                                            <div className="author-area-info">
                                                <h6 className="title">Ertastech</h6>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link href="#" className="rts-btn btn-border">
                                View More Blog
                                <ReactSVG
                                    src="assets/images/service/icons/13.svg"
                                    alt="arrow"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogFour