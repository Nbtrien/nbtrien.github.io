import { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import { CalendarMonth } from "@mui/icons-material";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div>
            <h1>Contact Me</h1>
          </div>
          <div className="contact-wrapper">
            <div className="contact-form">
              <p className="contact-info">
                If you have any questions or concerns, please don't hesitate to
                contact me. I am open to any work opportunities that align with
                my skills and interests.
              </p>

              <form>
                <label>Your Name:</label>
                <input type="text" id="name" name="name" required />

                <label>Your Email:</label>
                <input type="email" id="email" name="email" required />

                <label>Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                ></textarea>

                <button type="submit" className="send-button">
                  SEND
                </button>
              </form>
            </div>

            <div>
              <div className="contact-flex">
                <div className="button-icon">
                  <AlternateEmailIcon />
                </div>
                <p>trienbanguyen@gmail.com</p>
              </div>
              <div className="contact-flex">
                <div className="button-icon">
                  <LocalPhoneIcon />
                </div>
                <p>0345678912</p>
              </div>
              <div className="contact-flex">
                <div className="button-icon">
                  <LocationOnOutlined />
                </div>
                <p>Da Nang, Viet Nam</p>
              </div>
              <div className="contact-social-wrapper">
                <a
                  href="https://github.com/Nbtrien"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="button-icon">
                    <GitHubIcon />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/trien-nguyen-ba-a3920a267"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="button-icon">
                    <LinkedInIcon />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/trien-nguyen-ba-a3920a267"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="button-icon">
                    <FacebookIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
