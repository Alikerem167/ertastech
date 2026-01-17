import "../../public/assets/css/plugins/fontawesome.css";
import "../../public/assets/css/plugins/magnifying-popup.css";
import "../../public/assets/css/plugins/swiper.css";
import "../../public/assets/css/plugins/metismenu.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";

// Import your custom styles LAST to override plugin styles
import "../../public/assets/css/style.css";

import Script from "next/script";
import I18nInit from "../data/i18n-init";
import LanguageRouteSync from "../data/LanguageRouteSync"; // ✅ EKLENDİ

export const metadata = {
  title: "Luminos - IT solutions for a growing businesses",
  description: "IT solutions for a growing businesses",
  icons: {
    icon: "/assets/images/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="index-one">

        {/* ✅ i18n HER SAYFADAN ÖNCE */}
        <I18nInit />
        <LanguageRouteSync />

        {/* Sayfa içeriği */}
        {children}

        <Script
          src="/assets/js/plugins/smooth-scroll.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
