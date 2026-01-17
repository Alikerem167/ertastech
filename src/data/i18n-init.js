"use client";

import { useEffect } from "react";

export default function I18nInit() {
  useEffect(() => {
    import("./translate.js");
  }, []);

  return null;
}
