"use client";

import React, { useEffect, useState } from "react";
import BackToTop from "@/components/common/BackToTop";
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterOne from "@/components/footer/FooterOne";

import Posts from "@/data/Posts.json";
import BlogGridMain from "./BlogGridTwoMain";

export default function Page() {
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

  return (
    <>
      <HeaderTwo />

      <div className="career-single-banner-area ptb--70 blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="career-page-single-banner blog-page">
                <h1 className="title">{lang === "tr" ? "Son Haberler" : "Our Latest News"}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-blog-area rts-section-gapTop position-relative">
        <div className="container">
          <div className="row g-5">
            {Posts.slice(0, 4).map((blog, index) => (
              <div key={blog.slug ?? index} className="col-lg-6 col-md-6 col-sm-12">
                <div className="single-blog-area-start border-none">
                  <BlogGridMain
                    blogCategory={pick(blog.category)}
                    Slug={pick(blog.slug)} // slug string değilse bile güvenli
                    blogImage={blog.image}
                    authorImg={blog.authorImg}
                    blogTitle={blog.title} // BlogGridMain pick’leyecek (aşağıdaki not)
                    blogAuthor={pick(blog.author)}
                    blogPublishedDate={pick(blog.publishedDate)}
                    blogDescription={pick(blog.description ?? blog.descripTion)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="pagination-one">
                <ul className="justify-content-center">
                  <li>
                    <button className="active">01</button>
                  </li>
                  <li>
                    <button>02</button>
                  </li>
                  <li>
                    <button>03</button>
                  </li>
                  <li>
                    <button>04</button>
                  </li>
                  <li>
                    <button className="next-page">
                      <i className="fa-solid fa-chevrons-right" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
      <FooterOne />
    </>
  );
}
