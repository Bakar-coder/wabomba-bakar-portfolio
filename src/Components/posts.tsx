import React, { Fragment } from "react";

interface PostsTypes {}

const Posts: React.FC<PostsTypes> = ({}) => {
  return (
    <Fragment>
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>
          my <span>blog</span>
        </h1>
        <span className="title-bg">posts</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
              <article className="post-container">
                <div className="post-thumb">
                  <a
                    href="blog-post.html"
                    className="d-block position-relative overflow-hidden"
                  >
                    <img
                      src="/img/blog/blog-post-1.jpg"
                      className="img-fluid"
                      alt="Blog Post"
                    />
                  </a>
                </div>
                <div className="post-content">
                  <div className="entry-header">
                    <h3>
                      <a href="blog-post.html">
                        How to Own Your Audience by Creating an Email List
                      </a>
                    </h3>
                  </div>
                  <div className="entry-content open-sans-font">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore...
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
              <article className="post-container">
                <div className="post-thumb">
                  <a
                    href="blog-post.html"
                    className="d-block position-relative overflow-hidden"
                  >
                    <img
                      src="/img/blog/blog-post-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="post-content">
                  <div className="entry-header">
                    <h3>
                      <a href="blog-post.html">
                        Top 10 Toolkits for Deep Learning in 2020
                      </a>
                    </h3>
                  </div>
                  <div className="entry-content open-sans-font">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore...
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
              <article className="post-container">
                <div className="post-thumb">
                  <a
                    href="blog-post.html"
                    className="d-block position-relative overflow-hidden"
                  >
                    <img
                      src="/img/blog/blog-post-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="post-content">
                  <div className="entry-header">
                    <h3>
                      <a href="blog-post.html">
                        Everything You Need to Know About Web Accessibility
                      </a>
                    </h3>
                  </div>
                  <div className="entry-content open-sans-font">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore...
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
              <article className="post-container">
                <div className="post-thumb">
                  <a
                    href="blog-post.html"
                    className="d-block position-relative overflow-hidden"
                  >
                    <img
                      src="/img/blog/blog-post-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="post-content">
                  <div className="entry-header">
                    <h3>
                      <a href="blog-post.html">
                        How to Inject Humor & Comedy Into Your Brand
                      </a>
                    </h3>
                  </div>
                  <div className="entry-content open-sans-font">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore...
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
              <article className="post-container">
                <div className="post-thumb">
                  <a
                    href="blog-post.html"
                    className="d-block position-relative overflow-hidden"
                  >
                    <img
                      src="/img/blog/blog-post-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="post-content">
                  <div className="entry-header">
                    <h3>
                      <a href="blog-post.html">
                        Women in Web Design: How To Achieve Success
                      </a>
                    </h3>
                  </div>
                  <div className="entry-content open-sans-font">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore...
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
              <article className="post-container">
                <div className="post-thumb">
                  <a
                    href="blog-post.html"
                    className="d-block position-relative overflow-hidden"
                  >
                    <img
                      src="/img/blog/blog-post-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="post-content">
                  <div className="entry-header">
                    <h3>
                      <a href="blog-post.html">
                        Evergreen versus topical content: An overview
                      </a>
                    </h3>
                  </div>
                  <div className="entry-content open-sans-font">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore...
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 mt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Posts;
