"use client";

import { useEffect, useState } from "react";

const BlogGridMain = (props) => {
  const { Slug, blogImage, blogTitle } = props;

  const getLang = () =>
    typeof window === "undefined" ? "tr" : localStorage.getItem("lang") || "tr";

  const [lang, setLang] = useState(getLang);

  useEffect(() => {
    const onLangChange = () => setLang(getLang());
    window.addEventListener("languageChanged", onLangChange);
    return () => window.removeEventListener("languageChanged", onLangChange);
  }, []);

  // ✅ daha sağlam: string / {tr,en} / yanlışlıkla object gelirse bile patlatmaz
  const pickText = (val) => {
    if (!val) return "";
    if (typeof val === "string") return val;

    // { tr: "...", en: "..." } şeklindeyse
    if (typeof val === "object") {
      return val?.[lang] ?? val?.tr ?? val?.en ?? "";
    }

    return "";
  };

  const titleText = pickText(blogTitle);

  return (
    <div>
      <a href={`/blog-grid/${Slug}`} className="thumbnail">
        <img src={`/assets/images/blog/${blogImage}`} alt="blog_iamge" />
      </a>

      <div className="inner-content-area">
        <div className="top-area">
          <a href={`/blog-grid/${Slug}`}>
            <h3 className="title animated fadeIn">
              {titleText || "How to growing your business"}
            </h3>
          </a>

          <div className="bottom-author-area">
            <div className="author-area-info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridMain;
