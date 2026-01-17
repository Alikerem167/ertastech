"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/common/BackToTop";
import Posts from "@/data/Posts.json";
import FooterOne from "@/components/footer/FooterOne";

export default function BlogDetails() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const blogPost = Posts.find(
    (post) => String(post.slug).toLowerCase() === String(slug).toLowerCase()
  );

  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comment: "",
  });

  if (!blogPost) return <div>Post not found!</div>;

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

  const pickArr = (val) => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === "object") return val?.[lang] ?? val?.tr ?? val?.en ?? [];
    return [];
  };

  // --- fallbacks (ARTIK pick/pickArr ile) ---
  const authorName = blogPost.authorName ?? blogPost.author ?? "";
  const description = pick(blogPost.description ?? blogPost.descripTion);
  const subtitle = pick(blogPost.subtitle);
  const contentArr = pickArr(blogPost.content); // içerik artık tr/en array olabilir

  const faqs = pickArr(blogPost.faqs);
  const tags = pickArr(blogPost.tags);
  const images = Array.isArray(blogPost.images) ? blogPost.images : [];

  const authorCard = blogPost.authorCard ?? null;

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

      <div className="career-single-banner-area ptb--70 blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="career-page-single-banner blog-page">
                {/* ✅ FIX */}
                <h1 className="title">{pick(blogPost.title)}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-blog-list-area rts-section-gapTop">
        <div className="container">
          <div className="row g-5">
            {/* LEFT */}
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              <div className="blog-single-post-listing details mb--0">
                <div className="thumbnail">
                  {/* ✅ FIX */}
                  <img src={blogPost.bannerImg} alt={pick(blogPost.title)} />
                </div>

                <div className="blog-listing-content">
                  {/* meta */}
                  <div className="user-info">
                    {authorName && (
                      <div className="single">
                        <i className="far fa-user-circle" />
                        <span>{authorName}</span>
                      </div>
                    )}
                  </div>

                  {/* subtitle */}
                  {subtitle && (
                    <h3 className="title animated fadeIn">{subtitle}</h3>
                  )}

                  {/* description */}
                  {description && <p className="disc para-1">{description}</p>}

                  {/* content (array -> paragraphs) */}
                  {contentArr.length > 0
                    ? contentArr.map((p, i) => (
                        <p className="disc" key={i}>
                          {p}
                        </p>
                      ))
                    : null}

                  {/* optional quote (bunlar sende yoksa boş geçer) */}
                  {(blogPost.quote ||
                    blogPost.quoteAuthor ||
                    blogPost.authorRole) && (
                    <div className="rts-quote-area text-center">
                      {blogPost.quote && (
                        <h5 className="title">{pick(blogPost.quote)}</h5>
                      )}
                      {blogPost.quoteAuthor && (
                        <a href="#" className="name">
                          {pick(blogPost.quoteAuthor)}
                        </a>
                      )}
                      {blogPost.authorRole && (
                        <span>{pick(blogPost.authorRole)}</span>
                      )}
                    </div>
                  )}

                  {/* images gallery */}
                  {images.length > 0 && (
                    <div className="row g-5">
                      {images.map((img, i) => (
                        <div className="col-lg-6 col-md-6" key={i}>
                          <div className="thumbnail details">
                            <img src={img.src} alt={img.alt || `image-${i}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* FAQ / checklist */}
                  {blogPost.faqTitle && (
                    <h4 className="title mt--40 mt_sm--20">
                      {pick(blogPost.faqTitle)}
                    </h4>
                  )}

                  {faqs.length > 0 && (
                    <div className="check-area-details">
                      {faqs.map((q, i) => (
                        <div className="single-check" key={i}>
                          <i className="far fa-check-circle" />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* tags */}
                  <div className="row align-items-center mt--30">
                    {tags.length > 0 && (
                      <div className="col-lg-6 col-md-12">
                        <div className="details-tag">
                          <h6>Tags:</h6>
                          {tags.map((t, i) => (
                            <button key={i}>{t}</button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="col-lg-6 col-md-12">
                      <div className="details-share">
                        <h6>Share:</h6>
                        <button>
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button>
                          <i className="fab fa-twitter" />
                        </button>
                        <button>
                          <i className="fab fa-instagram" />
                        </button>
                        <button>
                          <i className="fab fa-linkedin-in" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* author card */}
                  {authorCard && (
                    <div className="author-area">
                      {authorCard.image && (
                        <div className="thumbnail details mb_sm--15">
                          <img
                            src={authorCard.image}
                            alt={authorCard.name || "author"}
                          />
                        </div>
                      )}
                      <div className="author-details team">
                        {authorCard.role && (
                          <span className="desig">{authorCard.role}</span>
                        )}
                        {authorCard.name && <h5>{authorCard.name}</h5>}
                        {authorCard.bio && (
                          <p className="disc">{authorCard.bio}</p>
                        )}
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
                    <h4 className="title">
                      Geri Dönüşleriniz Bizim İçin Önemlidir
                    </h4>
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
                    <button>
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
