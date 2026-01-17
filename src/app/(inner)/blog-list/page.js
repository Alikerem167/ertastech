"use client";
import BackToTop from "@/components/common/BackToTop";
import React from "react";
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterOne from "@/components/footer/FooterOne";
import Posts from "@/data/Posts.json";
import BlogGridMain from "./BlogListMain";

function page() {
  return (
    <>
      <HeaderTwo />

      <>
        <div className="career-single-banner-area ptb--70 blog-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="career-page-single-banner blog-page">
                  <h1 className="title" data-i18n="blog_list_title">
                    Bloglarımız
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rts-blog-list-area rts-section-gapTop">
          <div className="container">
            <div className="row g-5">
              {/* rts blog post area */}
              <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                {Posts.map((blog, index) => {
                  return (
                    <div key={index} className="col-lg-12 col-md-12 col-sm-12">
                      <div className="single-blog-area-start border-none mb--30">
                        <BlogGridMain
                          blogCategory={blog.category}
                          Slug={blog.slug}
                          blogImage={blog.image}
                          authorImg={blog.authorImg}
                          blogTitle={blog.title}
                          blogAuthor={blog.author}
                          blogPublishedDate={blog.publishedDate}
                        />
                      </div>
                    </div>
                  );
                }).slice(0, 5)}
              </div>
              {/* rts-blog post end area */}
            </div>
          </div>
        </div>
      </>

      <BackToTop />
      <FooterOne />
    </>
  );
}

export default page;
