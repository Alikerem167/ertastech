"use client";

import translations from "./translate.json";

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Normal text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Title
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key] !== undefined) {
      el.setAttribute("title", dict[key]);
    }
  });

  // Aria-label
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.textContent = lang === "tr" ? "EN" : "TR";
  }
}
// ✅ EKLENDİ: DOM geç render olunca dili birkaç kez güvenli uygula
function applyLanguageStable(lang) {
  applyLanguage(lang);

  requestAnimationFrame(() => applyLanguage(lang));
  setTimeout(() => applyLanguage(lang), 60);
  setTimeout(() => applyLanguage(lang), 180);
}


// ✅ EKLENDİ: Ülkeye göre ilk dil seçimi (Türkiye -> tr, diğer -> en)
// Kullanıcı daha önce seçtiyse zaten localStorage baskın olacak.
async function detectDefaultLang() {
  // Önce tarayıcı dilinden hızlı tahmin (fallback)
  const browserLang = (navigator.language || "").toLowerCase();
  let fallback = browserLang.startsWith("tr") ? "tr" : "en";

  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (!res.ok) return fallback;

    const data = await res.json();
    const countryCode = (data && data.country_code) ? String(data.country_code).toUpperCase() : "";

    return countryCode === "TR" ? "tr" : "en";
  } catch (e) {
    return fallback;
  }
}

// ✅ initI18n artık async oldu (geo tespiti için)
async function initI18n() {
  const savedLang = localStorage.getItem("lang");

  // ✅ EKLENDİ: Eğer kullanıcı daha önce seçmediyse ülkeye göre default belirle
  if (!savedLang) {
    const detected = await detectDefaultLang();
    applyLanguageStable(detected);
  } else {
    applyLanguageStable(savedLang);
  }

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || "tr";
      const next = current === "tr" ? "en" : "tr";
      applyLanguage(next);
    });
  }
}

// Next/React için: DOM zaten hazır olabilir
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initI18n();
    });
  } else {
    initI18n();
  }

  // Dışarıdan dil değişince (Nav butonları) anında uygula
  window.addEventListener("languageChanged", () => {
    const current = localStorage.getItem("lang") || "tr";
    applyLanguage(current);
  });
}

