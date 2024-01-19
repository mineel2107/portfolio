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
                <h4>2020 - Present</h4>
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
                <h3>Ethereum Development Bootcamp</h3>
                <p>Alchemy University</p>
                <br />
                <p>Learning Solidity and Other Blockchain Development tools</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ExperienceTl;
