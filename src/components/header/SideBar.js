"use client";
import React from "react";
import Link from "next/link";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const changeLang = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  return (
    <div>
      <div
        id="side-bar"
        className={`side-bar header-two ${isSidebarOpen ? "show" : ""}`}
      >
        <button
          className="close-icon-menu"
          aria-label="Close Menu"
          onClick={toggleSidebar}
        >
          <i className="far fa-times"></i>
        </button>

        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li onClick={toggleSidebar}>
                <Link className="main" href="/index-four" data-i18n="anasayfa">
                  Ana Sayfa
                </Link>
              </li>

              <li onClick={toggleSidebar}>
                <Link
                  className="main"
                  href="/case-studies"
                  data-i18n="referanslarimiz"
                >
                  Referanslarımız
                </Link>
              </li>

              <li onClick={toggleSidebar}>
                <Link className="main" href="/blog-list" data-i18n="blog">
                  Blog
                </Link>
              </li>

              <li onClick={toggleSidebar}>
                <Link className="main" href="/contact" data-i18n="iletisim">
                  İletişim
                </Link>
              </li>
            </ul>

            {/* 🔥 DİL SEÇİCİ – ARTIK AYRI KONTEYNER */}
            <div className="lang-switch-wrapper">
              <div
                className="lang-box"
                onClick={() => changeLang("tr")}
              >
                TR
              </div>

              <div
                className="lang-box"
                onClick={() => changeLang("en")}
              >
                EN
              </div>
            </div>
          </nav>
        </div>

        {/* 🔒 AŞIRI SERT CSS – TEMA EZİLMESİN DİYE */}
        <style>{`
          .lang-switch-wrapper {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 18px !important;
            margin-top: 28px !important;
            width: 100% !important;
          }

          .lang-box {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;

            width: 52px !important;
            height: 36px !important;

            border: 1px solid #ddd !important;
            border-radius: 999px !important;

            font-weight: 700 !important;
            cursor: pointer !important;
            user-select: none !important;

            background: transparent !important;
          }

          .lang-box:hover {
            background: #f3f3f3 !important;
          }
        `}</style>
      </div>
    </div>
  );
}

export default SideBar;
