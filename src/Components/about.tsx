import React, { Fragment } from "react";

interface AboutTypes {}

const About: React.FC<AboutTypes> = ({}) => {
  return (
    <Fragment>
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>
          ABOUT <span>ME</span>
        </h1>
        <span className="title-bg">Resume</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-xl-6">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                    personal infos
                  </h3>
                </div>
                <div className="col-12 d-block d-sm-none">
                  <img
                    src="/img/img-mobile-light.jpg"
                    className="img-fluid main-img-mobile"
                    alt="Wabomba Bakar, a fullstack javascript react and node web developer"
                  />
                </div>
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      <span className="title">first name: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Wabomba
                      </span>
                    </li>
                    <li>
                      <span className="title">last name: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Bakar
                      </span>
                    </li>

                    <li>
                      <span className="title">Nationality: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Ugandan
                      </span>
                    </li>
                    <li>
                      <span className="title">Freelance: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Available
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      <span className="title">phone: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        +256 781 996 306
                      </span>
                    </li>
                    <li>
                      <span className="title">Email: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        wabombabakar@mail.com
                      </span>
                    </li>
                    <li>
                      <span className="title">Skype: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        bakar.coder
                      </span>
                    </li>
                    <li>
                      <span className="title">langages: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        English
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-12 mt-3">
                  <a href="about.html" className="btn btn-download">
                    <span data-hover="Download CV">Download CV</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                Description
              </h3>
              <p className="lead">
                I am{" "}
                <span style={{ color: "#daa520" }}>
                  <strong>Bakar</strong>
                </span>
                , A software engineer / full-stack web developer based in
                Kampala, Uganda who loves building apps that live on the
                internet. I develop exceptional websites and web applications
                that provide intuitive, pixel perfect user interfaces with
                efficient, highly secure and modern backends using cutting edge
                technologies and best practices.
              </p>
              <p className="lead my-4">
                Below are some of the technologies I use in my development
                pipeline.
              </p>
            </div>
          </div>
          <hr className="separator" />

          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                My Skills
              </h3>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p90">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                html
              </h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p80">
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                css / sass
              </h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p85">
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                javascript (ES6+) and OOP
              </h6>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p80">
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                typescript
              </h6>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p90">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                Bootstrap
              </h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p90">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                React &amp; React SSR
              </h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p90">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                Node.js
              </h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p100">
                <span>100%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                Express.js
              </h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p75">
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                graphql
              </h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p95">
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                Ejs
              </h6>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p75">
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                MongoDB
              </h6>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p85">
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                SQL (POSTGRES / MYSQL)
              </h6>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p90">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                DOCKER
              </h6>
            </div>

            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p95">
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                Git &amp; Github
              </h6>
            </div>
          </div>

          <hr className="separator mt-1" />
        </div>
      </section>
    </Fragment>
  );
};

export default About;
