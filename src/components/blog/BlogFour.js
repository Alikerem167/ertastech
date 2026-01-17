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
                                <h2 className="title" data-i18n="blogfour_title">
                                    Blogumuz
                                </h2>
                            </div>
                        </div>

                        {/* Blog 1 */}
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                        >
                            <div className="single-blog-area-start border-none box-shadow-none ">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/01.webp" alt="blog_image" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span data-i18n="blogfour_item1_category">Bulut Bilişim</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn" data-i18n="blogfour_item1_title">
                                                Bulut Bilişim ve Cloud Migration Çözümleri
                                            </h3>
                                        </Link>
                                        <p className="disc" data-i18n="blogfour_item1_desc">
                                            Bulut bilişim teknolojileriyle sistemlerinizi daha güvenli, hızlı ve ölçeklenebilir hale getirin. ErtasTech cloud migration çözümleri sayesinde altyapınızı modern bulut sistemlerine taşıyarak performans ve maliyet avantajı sağlayın.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog 2 */}
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            <div className="single-blog-area-start border-none box-shadow-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/02.webp" alt="blog_image" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span data-i18n="blogfour_item2_category">UX Design</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn" data-i18n="blogfour_item2_title">
                                                UX Design ve Kullanıcı Deneyimi Çözümleri
                                            </h3>
                                        </Link>
                                        <p className="disc" data-i18n="blogfour_item2_desc">
                                            Kullanıcı deneyimi (UX) odaklı tasarımlar ile web ve mobil projelerinizde etkileşimi artırın. ErtasTech UX design hizmetleri, kullanıcı davranışlarını analiz ederek dönüşüm oranlarını yükselten arayüzler sunar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog 3 */}
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            <div className="single-blog-area-start border-none box-shadow-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/03.webp" alt="blog_image" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span data-i18n="blogfour_item3_category">Web Uygulaması</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn" data-i18n="blogfour_item3_title">
                                                Web Uygulaması Geliştirme Hizmetleri
                                            </h3>
                                        </Link>
                                        <p className="disc" data-i18n="blogfour_item3_desc">
                                            İşletmelere özel web uygulaması geliştirme çözümleriyle dijital süreçlerinizi yönetin. Güvenli, hızlı ve ölçeklenebilir web yazılım sistemleri sayesinde iş verimliliğinizi artırın.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <Link href="/blog-list" className="rts-btn btn-border" data-i18n="blogfour_more_btn">
                                Daha Fazlası
                                <ReactSVG src="assets/images/service/icons/13.svg" alt="arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogFour
