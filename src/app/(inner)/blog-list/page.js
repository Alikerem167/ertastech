"use client";
import BackToTop from "@/components/common/BackToTop";
import React from "react";
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterOne from "@/components/footer/FooterOne";
import Posts from '@/data/Posts.json';
import BlogGridMain from './BlogListMain';
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
                                    <h1 className="title">Bloglarımız</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-blog-list-area rts-section-gapTop">
                    <div className="container">
                        <div className="row g-5">
                            {/* rts blo post area */}
                            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                                {Posts.map((blog, index) => {
                                    return (
                                        <div key={index} className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="single-blog-area-start border-none mb--30">
                                                {
                                                    <BlogGridMain
                                                        blogCategory={blog.category}
                                                        Slug={blog.slug}
                                                        blogImage={blog.image}
                                                        authorImg={blog.authorImg}
                                                        blogTitle={blog.title}
                                                        blogAuthor={blog.author}
                                                        blogPublishedDate={blog.publishedDate}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    )
                                }).slice(0, 5)}
                            </div>
                            {/* rts-blog post end area */}
                            {/*rts blog wizered area */}
                            <div className="col-xl-4 col-md-12 col-sm-12 col-12 pl-b-list-controler">
                                {/* single wizered start */}
                                <div className="rts-single-wized search">
                                    <div className="wized-header">
                                        <h5 className="title">Search Hear</h5>
                                    </div>
                                    <div className="wized-body">
                                        <div className="rts-search-wrapper">
                                            <input
                                                className="Search"
                                                type="text"
                                                placeholder="Enter Keyword"
                                            />
                                            <button>
                                                <i className="fal fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* single wizered End */}
                                {/* single wizered start */}
                                <div className="rts-single-wized Categories">
                                    <div className="wized-header">
                                        <h5 className="title">Categories</h5>
                                    </div>
                                    <div className="wized-body">
                                        {/* single categoris */}
                                        <ul className="single-categories">
                                            <li>
                                                <a href="/blog-details">
                                                    Business Solution <i className="far fa-long-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* single categoris End */}
                                        {/* single categoris */}
                                        <ul className="single-categories">
                                            <li>
                                                <a href="/blog-details">
                                                    Strategy Growth
                                                    <i className="far fa-long-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* single categoris End */}
                                        {/* single categoris */}
                                        <ul className="single-categories">
                                            <li>
                                                <a href="/blog-details">
                                                    Finance Solution
                                                    <i className="far fa-long-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* single categoris End */}
                                        {/* single categoris */}
                                        <ul className="single-categories">
                                            <li>
                                                <a href="/blog-details">
                                                    Investment Policy
                                                    <i className="far fa-long-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* single categoris End */}
                                        {/* single categoris */}
                                        <ul className="single-categories">
                                            <li>
                                                <a href="/blog-details">
                                                    Tax Managment
                                                    <i className="far fa-long-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* single categoris End */}
                                    </div>
                                </div>
                                {/* single wizered End */}
                                {/* single wizered start */}
                                <div className="rts-single-wized Recent-post">
                                    <div className="wized-header">
                                        <h5 className="title">Recent Posts</h5>
                                    </div>
                                    <div className="wized-body">
                                        {/* recent-post */}
                                        <div className="recent-post-single">
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img src="assets/images/blog/sm/01.jpg" alt="Blog_post" />
                                                </a>
                                            </div>
                                            <div className="content-area">
                                                <div className="user">
                                                    <i className="fal fa-clock" />
                                                    <span>15 Jan, 2023</span>
                                                </div>
                                                <a className="post-title" href="/blog-details">
                                                    <h6 className="title">
                                                        We would love to share a similar experience
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        {/* recent-post End */}
                                        {/* recent-post */}
                                        <div className="recent-post-single">
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img src="assets/images/blog/sm/02.jpg" alt="Blog_post" />
                                                </a>
                                            </div>
                                            <div className="content-area">
                                                <div className="user">
                                                    <i className="fal fa-clock" />
                                                    <span>15 Jan, 2023</span>
                                                </div>
                                                <a className="post-title" href="/blog-details">
                                                    <h6 className="title">
                                                        We would love to share a similar experience
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        {/* recent-post End */}
                                        {/* recent-post */}
                                        <div className="recent-post-single">
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img src="assets/images/blog/sm/03.jpg" alt="Blog_post" />
                                                </a>
                                            </div>
                                            <div className="content-area">
                                                <div className="user">
                                                    <i className="fal fa-clock" />
                                                    <span>15 Jan, 2023</span>
                                                </div>
                                                <a className="post-title" href="/blog-details">
                                                    <h6 className="title">
                                                        We would love to share a similar experience
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        {/* recent-post End */}
                                    </div>
                                </div>
                                {/* single wizered End */}
                                {/* single wizered start */}
                                <div className="rts-single-wized Recent-post">
                                   
                                    
                                </div>
                                {/* single wizered End */}
                                {/* single wizered start */}
                                
                                {/* single wizered End */}
                            </div>
                            {/* rts- blog wizered end area */}
                        </div>
                       
                    </div>
                </div>
            </>

            <BackToTop />
            <FooterOne />
        </>

    )
}

export default page