import Link from "next/link";
const ContactMe = () => {
  return (
    <div className="ContactMe">
      <div className="wrapper">
        <div className="img-area">
          <div className="inner-area">
            <img src="/mirror_selfie.jpg" alt="" />
          </div>
        </div>
        <div className="icon arrow">
          <i className="fas fa-arrow-left"></i>
        </div>

        <div className="name">Mineel Eppa</div>
        <div className="about">Web Developer</div>
        <div className="social-icons">
          <Link
            className="linkedin"
            href="https://www.linkedin.com/in/mineel-eppa-682206258/"
            target="_blank"
          >
            <i className="fab fa-linkedin"> </i>
          </Link>
          <Link
            className="twitter"
            href="https://twitter.com/Mineel_Eppa"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            className="insta"
            href="https://www.instagram.com/mineel_eppa/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            className="button"
            href="https://github.com/mineel2107"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </Link>
        </div>

        <div className="social-share">
          <div className=" text-center w-full text-secondary">
            mineeleppa2107@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
