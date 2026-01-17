"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import modules
import "swiper/css/navigation";
function Testimonials() {
    return (
        <div>
            <div className="rts-testimonials-area rts-section-gap bg-solution">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-testimonials-wrapper-full-center">
                                <div className="swiper mySwiper-testimonials-4" dir="ltr">


                                    <Swiper
                                        slidesPerView={2.4}
                                        spaceBetween={150}
                                        loop={true}
                                        centeredSlides={true}
                                        modules={[Navigation, Autoplay]}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                        }}
                                        speed={1000}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        breakpoints={{
                                            // When the viewport is >= 640px
                                            240: {
                                                slidesPerView: 1,
                                                spaceBetween: 0,
                                            },
                                            // When the viewport is >= 768px
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 0,
                                            },
                                            // When the viewport is >= 1024px
                                            1024: {
                                                slidesPerView: 2,
                                                spaceBetween: 150,
                                            },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className="single-testimonials-4">
                                                <p className="disc">
                                                  “Hizmet sektörüne uygun, sade ama etkili bir dijital yapı kurmak için Ertas Tech ile çalıştık.
Web sitemiz sayesinde müşteri taleplerimiz daha düzenli ve hızlı hale geldi.
Marka algımızı güçlendiren tasarım ve teknik çözümler sundular.
İhtiyaçlarımızı doğru analiz edip bize özel bir sistem geliştirdiler.
Profesyonellik ve güveni aynı anda sunan bir ekip.”
                                                </p>
                                                <div className="user-area">
                                                    
                                                    <div className="info-area">
                                                        <h6 className="title">X</h6>
                                                        <span>Uygun Temizlik Şirket Sahibi</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-testimonials-4">
                                                <p className="disc">
                                                    “Bameman’ın e-ticaret altyapısını Ertas Tech ile birlikte sıfırdan inşa ettik.
Hem kullanıcı deneyimi hem de mobil performans konusunda beklentilerimizin üzerine çıktılar.
Satış odaklı tasarım anlayışları ve teknik yaklaşımları sayesinde dönüşüm oranlarımız ciddi şekilde arttı.
Süreç boyunca şeffaf, hızlı ve çözüm odaklı ilerlediler.
E-ticaret alanında güvenilir bir teknoloji ortağı arayan herkese gönül rahatlığıyla öneririz.”
                                                </p>
                                                <div className="user-area">
                                                    
                                                    <div className="info-area">
                                                        <h6 className="title">X</h6>
                                                        <span>Bameman E-Ticaret Genel Müdürü</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-testimonials-4">
                                                <p className="disc">
                                                    “Ertas Tech, dijital dönüşüm sürecimizde yalnızca bir hizmet sağlayıcı değil, gerçek bir iş ortağı oldu.
Mevcut sistemlerimizi analiz ederek daha verimli ve güvenli bir altyapı kurmamıza yardımcı oldular.
Teknik bilgi birikimleri ve stratejik yaklaşımları fark yarattı.
Zamanında teslim ve sürdürülebilir çözümler sundular.
Uzun vadeli iş birlikleri için doğru adres.”
                                                </p>
                                                <div className="user-area">
                                                    
                                                    <div className="info-area">
                                                        <h6 className="title">X</h6>
                                                        <span>X</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-testimonials-4">
                                                <p className="disc">
                                                    “Projelerimizi Ertas Tech’in uzman ekibiyle hayata geçirmek bizim için büyük bir avantaj oldu.
İhtiyacımıza özel geliştirilen çözümler sayesinde süreçlerimiz hızlandı.
Teknolojiye hakimiyetleri ve iletişimleri son derece güçlü.
Her aşamada destek sunmaları güven vericiydi.
Yenilikçi ve kurumsal yaklaşımı bir arada sunan nadir ekiplerden biri.”
                                                </p>
                                                <div className="user-area">
                                                    
                                                    <div className="info-area">
                                                        <h6 className="title">X</h6>
                                                        <span>X</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-testimonials-4">
                                                <p className="disc">
                                                    “Ertas Tech ile çalışmaya başladığımız günden itibaren teknolojiye bakış açımız değişti.
İş süreçlerimizi analiz ederek bize özel, ölçeklenebilir çözümler geliştirdiler.
Güvenlik, performans ve sürdürülebilirlik konularında yüksek standartlarla ilerlediler.
Teknik uzmanlıklarını iş hedeflerimizle başarıyla birleştirdiler.
Dijital alanda güçlü ve uzun vadeli bir iş ortağı arayanlar için doğru tercih.”
                                                </p>
                                                <div className="user-area">
                                                    
                                                    <div className="info-area">
                                                        <h6 className="title">X</h6>
                                                        <span>X</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>


                                    </Swiper>
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Testimonials