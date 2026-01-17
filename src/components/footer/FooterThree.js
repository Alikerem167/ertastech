"use client";
import React from "react";
import Link from "next/link";

function FooterThree() {
  return (
    <div>
      <div className="gradient-footer-wrapper">
        {/* rts footer area start */}
        <div className="rts-footer-area rts-section-gapTop pb--80">
          <div className="container">
            <div className="row">
              {/* Sol: Logo + açıklama */}
              <div className="col-lg-5">
                <div className="logo-area">
                  <Link href="/" className="logo">
                    <img src="/assets/images/logo/logo3.png" alt="logo" />
                  </Link>
                  <p className="disc" data-i18n="footer_desc">
                    Ertaş Tech, işletmelerin dijital dönüşüm süreçlerinde ihtiyaç duyduğu
                    teknoloji çözümlerini güvenilir, sürdürülebilir ve sonuç odaklı bir
                    yaklaşımla sunar.
                  </p>
                </div>
              </div>

              {/* Sağ: İletişim */}
              <div className="col-lg-7">
                <div className="row g-5 justify-content-end">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="single-nav-area-footer">
                      <p className="parent" data-i18n="footer_contact_title">
                        İletişim
                      </p>
                      <ul>
                        <li>
                          <span data-i18n="footer_email_label">E-posta: </span>
                          <a href="mailto:info@ertastech.com">info@ertastech.com</a>
                        </li>
                        <li>
                          <span data-i18n="footer_phone_label">Telefon: </span>
                          <a href="tel:+905551112233">+90 555 111 22 33</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="single-nav-area-footer">
                      <p className="parent" data-i18n="footer_support_title">
                        Destek
                      </p>
                      <ul>
                        <li>
                          <span data-i18n="footer_support_label">Teknik Destek: </span>
                          <a href="mailto:support@ertastech.com">support@ertastech.com</a>
                        </li>
                        <li>
                          <span data-i18n="footer_sales_label">Satış & Teklif: </span>
                          <a href="mailto:sales@ertastech.com">sales@ertastech.com</a>
                        </li>
                        <li>
                          <Link href="/contact" data-i18n="footer_contact_form">
                            İletişim Formu
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              {/* Sağ bitiş */}
            </div>
          </div>
        </div>
        {/* rts footer area end */}

        {/* rts copyright area start */}
        <div className="rts-copyright-area-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-wrapper">
                  <p data-i18n="footer_copyright">
                    © 2026 Ertastech. Tüm hakları saklıdır.
                  </p>
                  <div className="social-copyright-area">
                    <ul>
                      
                      
                      
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts copyright area end */}
      </div>
    </div>
  );
}

export default FooterThree;
