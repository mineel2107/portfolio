import Link from "next/link";
const Contacts = () => {
  return (
    <div className="contact_details">
      <div className="wrapper">
        <Link
          className="button"
          href="https://www.instagram.com/mineel_eppa/"
          target="_blank"
        >
          <div className="icon">
            <i className="fab fa-instagram"> </i>
          </div>
          <span>Instagram</span>
        </Link>
        <Link
          className="button"
          href="https://twitter.com/Mineel_Eppa"
          target="_blank"
        >
          <div className="icon">
            <i className="fab fa-twitter"> </i>
          </div>
          <span>Twitter</span>
        </Link>
        <Link
          className="button"
          href="https://github.com/mineel2107"
          target="_blank"
        >
          <div className="icon">
            <i className="fab fa-github"> </i>
          </div>
          <span>Github</span>
        </Link>
        <Link
          className="button"
          href="https://www.linkedin.com/in/mineel-eppa-682206258/"
          target="_blank"
        >
          <div className="icon">
            <i className="fab fa-linkedin"> </i>
          </div>
          <span>LinkedIn</span>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
