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
    if (typeof val === "object") return val?.[lang] ?? val?.tr ?? val?.en ?? "";
    return "";
  };

  const titleText = pick(blogTitle) || "How to grow your business";

  return (
    <div>
      <a href={`/blog-grid/${Slug}`} className="thumbnail">
        <img src={`/assets/images/blog/${blogImage}`} alt={titleText} />
      </a>

      <div className="inner-content-area">
        <div className="top-area">
          <span></span>

          <a href={`/blog-grid/${Slug}`}>
            <h3 className="title animated fadeIn">{titleText}</h3>
          </a>

          <p className="disc"></p>

          <div className="bottom-author-area">
            <div className="author-area-info">
              <h6 className="title"></h6>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridMain;
