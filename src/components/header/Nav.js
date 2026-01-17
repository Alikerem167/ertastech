"use client";
import React from "react";
import Link from "next/link";

function Nav() {
  const changeLang = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  return (
    <div className="nav-area">
      <nav>
        <ul>
          <li>
            <Link className="nav-link" href="/index-four" data-i18n="anasayfa">
              Ana Sayfa
            </Link>
          </li>

          <li>
            <Link className="nav-link" href="/case-studies" data-i18n="referanslarimiz">
              Referanslarımız
            </Link>
          </li>

          <li>
            <Link className="nav-link" href="/blog-list" data-i18n="blog">
              Blog
            </Link>
          </li>

          <li>
            <Link className="nav-link" href="/contact" data-i18n="iletisim">
              İletişim
            </Link>
          </li>

          {/* Dil seçici */}
         <li className="lang-switch">
  <button
    type="button"
    className="lang-btn"
    onClick={() => changeLang("tr")}
  >
    TR
  </button>

  <button
    type="button"
    className="lang-btn"
    onClick={() => changeLang("en")}
  >
    EN
  </button>
</li>
        </ul>
      </nav>

      {/* CSS aynı dosyada */}
      <style>{`
        .lang-switch {
  display: flex;
  gap: 8px;
  align-items: center;
}

.lang-btn {
  background: transparent;
  border: 1px solid #ddd;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.15s ease;
}

.lang-btn:hover {
  background: #f3f3f3;
}

/* aktif dili göstermek istersen (opsiyonel) */
.lang-btn.active {
  background: #1f1f25;
  color: #fff;
  border-color: #1f1f25;
}


      `}</style>
    </div>
  );
}

export default Nav;
