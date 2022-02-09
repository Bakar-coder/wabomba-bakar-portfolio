import React from "react";

interface HomeTypes {}

const Home: React.FC<HomeTypes> = ({}) => {
  return (
    <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
      <div className="color-block d-none d-lg-block"></div>
      <div className="row home-details-container align-items-center">
        <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
          <div>
            <img
              src="/img/casper-portfolio.jpg"
              className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
              alt="my picture"
            />
            <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">
              hi there !
            </h6>
            <h1 className="text-uppercase poppins-font">
              <span>I'm</span> Wabomba Bakar
            </h1>
            <p className="open-sans-font">
              I'm a Uganda based full stack Javascript &amp; Typescript Web
              Developer / Soft Engineer focused on developing clean &amp;
              exceptional high quality Web Applications with secure &amp; highly
              efficient modern backends using cutting edge Technologies &amp;
              industry best practices.
            </p>
            <a href="/about" className="btn btn-about">
              more about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
