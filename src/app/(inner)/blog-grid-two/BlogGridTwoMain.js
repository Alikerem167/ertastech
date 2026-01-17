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

  const pick = (val) => {
    if (!val) return "";
    if (typeof val === "string") return val;
    if (typeof val === "number") return String(val);
    if (typeof val === "object") return val?.[lang] ?? val?.tr ?? val?.en ?? "";
    return "";
  };

  const slugText = pick(Slug);
  const titleText = pick(blogTitle) || "How to grow your business";

  return (
    <div>
      <a href={`/blog-grid/${slugText}`} className="thumbnail">
        <img
          src={`/assets/images/blog/${blogImage}`}
          alt={titleText}
        />
      </a>

      <div className="inner-content-area">
        <div className="top-area">
          <span>Cloud Migration</span>

          <a href={`/blog-grid/${slugText}`}>
            <h3 className="title animated fadeIn">{titleText}</h3>
          </a>

          <p className="disc">
            How do you create compelling presentations that wow your colleagues and
            impress your managers?
          </p>

          <div className="bottom-author-area">
            <img src="assets/images/testimonials/01.png" alt="author" />
            <div className="author-area-info">
              <h6 className="title">Marcus Freeman</h6>
              <span>24 Sept 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridMain;
