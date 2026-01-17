"use client"

const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <div>
            <a href={`/blog-grid/${Slug}`} className="thumbnail">
                <img src={`/assets/images/blog/${blogImage}`} alt="blog_image" />
            </a>
            <div className="inner-content-area">
                <div className="top-area">
                    <span></span>
                    <a href={`/blog-grid/${Slug}`}>
                        <h3 className="title animated fadeIn">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h3>
                    </a>
                    <p className="disc">
                        
                    </p>
                    <div className="bottom-author-area">
                        
                        <div className="author-area-info">
                            <h6 className="title"></h6>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogGridMain