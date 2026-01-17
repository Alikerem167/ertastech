"use client";
import React from "react";
import { ReactSVG } from "react-svg";

function ServiceFive() {
  return (
    <div>
      {/* innovative solution area start */}
      <div className="innovative-solution rts-section-gap bg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-4-center">
                <h2 className="title" data-i18n="servicefive_title">
                  Başlıca Hizmetlerimiz
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--30">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/22.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_automation">Otomasyon</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/23.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_app_analysis">Uygulama Çözümlemeleri</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/24.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_cybersecurity">Siber Güvenlik</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/25.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_technologies">Technologies</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/26.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_tech_consulting">Teknoloji Danışmanlığı</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/27.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_software_dev">Yazılım Geliştirme</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/28.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_ai_services">Yapay Zeka Hizmetleri</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/29.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_management">Yönetim</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <img src="assets/images/service/icons/30.svg" alt="service" />
                </div>
                <div className="info">
                  <h4 className="title" data-i18n="servicefive_item_tech_innovations">Teknoloji İnovasyonları</h4>
                  <ReactSVG src="assets/images/service/icons/13.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-top-right wow toBottomLeft">
          <img src="assets/images/service/03.png" alt="shape" />
        </div>
      </div>
      {/* innovative solution area end */}
    </div>
  );
}

export default ServiceFive;
