import React from "react";

const ExperienceTl = () => {
  return (
    <div className="experienceTl">
      <div className="container">
        <main className="row">
          <section className="col">
            <header className="title">
              <h2>EDUCATION</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>2024-Present</h4>
                <h3>Ethereum Development</h3>
                <p>Online Degree</p>
              </div>
              <div className="box">
                <h4>2020 - 2024</h4>
                <h3>SNIST , Hyderabad</h3>
                <p>Bachelor's Degree</p>
              </div>
              <div className="box">
                <h4>2018 - 2020</h4>
                <h3> Dakshana Foundation , Bangalore</h3>
                <p>Intermediate Schooling</p>
              </div>
              <div className="box">
                <h4>2013 - 2018</h4>
                <h3>JNV Adilabad</h3>
                <p>High Schooling</p>
              </div>
            </div>
          </section>

          <section className="col">
            <header className="title">
              <h2>EXPERIENCE</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h4>2024</h4>
                <h3>Freelance Full-Stack Developer</h3>
                <p>Mithra Photography</p>
                <br />
                <p>
                  Portfolio to showcase the work of a Freelance Photographer
                  based in Hyderabad.
                </p>
              </div>

              {/* <div className="box">
                <h4>2024</h4>
                <h3>Freelance Full-Stack Developer</h3>
                <p>Digital Marketing Firm</p>
                <br />
                <p>Marketplace and Website for the Digital Marketing Firm</p>
              </div> */}

              <div className="box">
                <h4>2024</h4>
                <h3>Freelance Full-Stack Developer</h3>
                <p>House of Pergola's</p>
                <br />
                <p>
                  Website for Showcase of Designs for Interior Designing Firm
                  based in Hyderabad
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ExperienceTl;
