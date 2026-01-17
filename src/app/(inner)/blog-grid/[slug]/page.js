"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/common/BackToTop";
import Posts from "@/data/Posts.json";
import FooterOne from "@/components/footer/FooterOne";

export default function BlogDetails() {
  // --- slug ---
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  // --- lang ---
  const getLang = () =>
    typeof window === "undefined" ? "tr" : localStorage.getItem("lang") || "tr";

  const [lang, setLang] = useState(getLang);

  useEffect(() => {
    const onLangChange = () => setLang(getLang());
    window.addEventListener("languageChanged", onLangChange);
    return () => window.removeEventListener("languageChanged", onLangChange);
  }, []);

  // --- helpers: string / {tr,en} safe ---
  const pick = (val) => {
    if (val == null) return "";
    if (typeof val === "string") return val;
    if (typeof val === "number") return String(val);

    if (typeof val === "object") {
      // { tr: "...", en: "..." } or {tr:[...],en:[...]} etc.
      const v = val?.[lang] ?? val?.tr ?? val?.en;
      if (v == null) return "";
      if (typeof v === "string") return v;
      if (typeof v === "number") return String(v);
      // if v is array/object mistakenly, don't crash:
      return "";
    }

    return "";
  };

  const pickArr = (val) => {
    if (val == null) return [];
    if (Array.isArray(val)) return val;

    if (typeof val === "object") {
      const v = val?.[lang] ?? val?.tr ?? val?.en;
      if (Array.isArray(v)) return v;
      return [];
    }

    return [];
  };

  // --- find post safely ---
  const blogPost = useMemo(() => {
    if (!slug) return null;
    const s = String(slug).toLowerCase();
    return (
      Posts.find(
        (post) => String(post.slug).toLowerCase() === s
      ) || null
    );
  }, [slug]);

  // slug daha gelmeden render olmasın (özellikle ilk hydration anında)
  if (!slug) return null;

  if (!blogPost) return <div>Post not found!</div>;

  // --- normalize fields ---
  const titleText = pick(blogPost.title) || "Blog";
  const bannerImg = blogPost.bannerImg || "";
  const bannerAlt = titleText;

  const authorName = pick(blogPost.authorName) || pick(blogPost.author) || "";
  const publishedDate = pick(blogPost.publishedDate) || pick(blogPost.date) || "";

  const description = pick(blogPost.description ?? blogPost.descripTion);
  const subtitle = pick(blogPost.subtitle);

  const contentArr = pickArr(blogPost.content); // array içerik (tr/en olabilir)
  const faqs = pickArr(blogPost.faqs);
  const tags = pickArr(blogPost.tags);

  const images = Array.isArray(blogPost.images) ? blogPost.images : [];

  const quote = pick(blogPost.quote);
  const quoteAuthor = pick(blogPost.quoteAuthor);
  const authorRole = pick(blogPost.authorRole);

  // authorCard nested i18n safe
  const authorCard = blogPost.authorCard ?? null;
  const authorCardName = authorCard ? pick(authorCard.name) : "";
  const authorCardRole = authorCard ? pick(authorCard.role) : "";
  const authorCardBio = authorCard ? pick(authorCard.bio) : "";
  const authorCardImage = authorCard?.image || "";

  // --- comments form ---
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((prev) => [{ ...formData }, ...prev]);
    setFormData({ name: "", email: "", topic: "", comment: "" });
  };

  return (
    <div className="">
      <HeaderTwo />

      {/* banner */}
      <div className="career-single-banner-area ptb--70 blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="career-page-single-banner blog-page">
                <h1 className="title">{titleText}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="rts-blog-list-area rts-section-gapTop">
        <div className="container">
          <div className="row g-5">
            {/* LEFT */}
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              <div className="blog-single-post-listing details mb--0">
                {bannerImg && (
                  <div className="thumbnail">
                    <img src={bannerImg} alt={bannerAlt} />
                  </div>
                )}

                <div className="blog-listing-content">
                  {/* meta */}
                  {(authorName || publishedDate) && (
                    <div className="user-info">
                      {authorName && (
                        <div className="single">
                          <i className="far fa-user-circle" />
                          <span>{authorName}</span>
                        </div>
                      )}

                      {publishedDate && (
                        <div className="single">
                          <i className="far fa-clock" />
                          <span>{publishedDate}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* subtitle */}
                  {subtitle && (
                    <h3 className="title animated fadeIn">{subtitle}</h3>
                  )}

                  {/* description */}
                  {description && <p className="disc para-1">{description}</p>}

                  {/* content paragraphs */}
                  {contentArr.length > 0 &&
                    contentArr.map((p, i) => (
                      <p className="disc" key={i}>
                        {typeof p === "string" ? p : ""}
                      </p>
                    ))}

                  {/* quote */}
                  {(quote || quoteAuthor || authorRole) && (
                    <div className="rts-quote-area text-center">
                      {quote && <h5 className="title">{quote}</h5>}
                      {quoteAuthor && (
                        <a href="#" className="name" onClick={(e) => e.preventDefault()}>
                          {quoteAuthor}
                        </a>
                      )}
                      {authorRole && <span>{authorRole}</span>}
                    </div>
                  )}

                  {/* images gallery */}
                  {images.length > 0 && (
                    <div className="row g-5">
                      {images.map((img, i) => (
                        <div className="col-lg-6 col-md-6" key={i}>
                          <div className="thumbnail details">
                            <img
                              src={img?.src || ""}
                              alt={img?.alt || `image-${i}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* FAQ / checklist */}
                  {pick(blogPost.faqTitle) && (
                    <h4 className="title mt--40 mt_sm--20">
                      {pick(blogPost.faqTitle)}
                    </h4>
                  )}

                  {faqs.length > 0 && (
                    <div className="check-area-details">
                      {faqs.map((q, i) => (
                        <div className="single-check" key={i}>
                          <i className="far fa-check-circle" />
                          <span>{typeof q === "string" ? q : ""}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* tags + share */}
                  <div className="row align-items-center mt--30">
                    {tags.length > 0 && (
                      <div className="col-lg-6 col-md-12">
                        <div className="details-tag">
                          <h6>Tags:</h6>
                          {tags.map((t, i) => (
                            <button key={i} type="button">
                              {typeof t === "string" ? t : ""}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="col-lg-6 col-md-12">
                      <div className="details-share">
                        <h6>Share:</h6>
                        <button type="button">
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button type="button">
                          <i className="fab fa-twitter" />
                        </button>
                        <button type="button">
                          <i className="fab fa-instagram" />
                        </button>
                        <button type="button">
                          <i className="fab fa-linkedin-in" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* author card */}
                  {authorCard && (authorCardName || authorCardRole || authorCardBio || authorCardImage) && (
                    <div className="author-area">
                      {authorCardImage && (
                        <div className="thumbnail details mb_sm--15">
                          <img
                            src={authorCardImage}
                            alt={authorCardName || "author"}
                          />
                        </div>
                      )}
                      <div className="author-details team">
                        {authorCardRole && <span className="desig">{authorCardRole}</span>}
                        {authorCardName && <h5>{authorCardName}</h5>}
                        {authorCardBio && <p className="disc">{authorCardBio}</p>}
                      </div>
                    </div>
                  )}

                  {/* comments */}
                  <div className="comments-area">
                    <div id="comments-container">
                      {comments.map((c, i) => (
                        <div key={i} className="comment">
                          <h5>{c.name}</h5>
                          <p>{c.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* form */}
                  <div className="replay-area-details">
                    <h4 className="title">Geri Dönüşleriniz Bizim İçin Önemlidir</h4>

                    <form id="comment-form" onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Adınız Soyadınız"
                            required
                          />
                        </div>

                        <div className="col-lg-6">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-Posta Adresiniz"
                            required
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            placeholder="Konu Başlığı"
                          />

                          <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            placeholder="Mesajınız"
                            required
                          />
                        </div>

                        <div className="col-12">
                          <button className="rts-btn btn-primary" type="submit">
                            Gönder
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12 pd-control-bg--40">
              <div className="rts-single-wized search">
                <div className="wized-header">
                  <h5 className="title">Search</h5>
                </div>
                <div className="wized-body">
                  <div className="rts-search-wrapper">
                    <input
                      className="Search"
                      type="text"
                      placeholder="Enter Keyword"
                    />
                    <button type="button">
                      <i className="fal fa-search" />
                    </button>
                  </div>
                </div>
              </div>

              {/* istersen burayı da Posts.json’dan besleriz */}
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}
