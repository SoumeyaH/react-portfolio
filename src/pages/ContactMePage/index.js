import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Title from "../../components/Title";
import ContactForm from "../../components/ContactForm";

import "./ContactMePage.css";

const ContactMePage = () => {
  return (
    <div className="contact-me-page-container">
      <Title text="Contact Me" />
      <main className="contact-me-container">
        <div className="contact-form-container">
          <ContactForm />
        </div>
        <aside class="m-2">
          <p>
            <strong>Email:</strong>
            <a href="mailto:soumeyahassan47@gmail.com">
              {" "}
              soumeyahassan47@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +447419213578
          </p>
          <div>
            <div>
              <span>
                <strong>GitHub:</strong>
              </span>
              <a href="https://github.com/SoumeyaH" target="_blank">
                <AiFillGithub size={30} />
              </a>
            </div>
            <div>
              <span>
                <strong>LinkedIn:</strong>
              </span>
              <a
                href="https://www.linkedin.com/in/soumeya-hassan"
                target="_blank"
              >
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default ContactMePage;
