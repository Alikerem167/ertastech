"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LanguageRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    // route değiştiğinde dili tekrar uygula
    window.dispatchEvent(new Event("languageChanged"));
  }, [pathname]);

  return null;
}
