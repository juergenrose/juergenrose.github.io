import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import mailIcon from "../assets/icons/mail.svg";

export default function Contact() {
  return (
    <section
      className="my-20 flex flex-col justify-center items-center"
      id="contact"
    >
      <h2 className="contact-heading">Let’s connect!</h2>
      <div className="flex gap-4 mt-4">
        <a href="https://www.linkedin.com/in/juergen-mosgan" target="_blank">
          <img
            src={linkedinIcon}
            alt="LinkedIn Icon"
            className="md:w-16 md:h-16 w-12 h-12 rounded-full p-2 bg-violet-500 hover:bg-teal-500 transition-colors"
          />
        </a>

        <a href="https://github.com/juergenrose" target="_blank">
          <img
            src={githubIcon}
            alt="GitHub Icon"
            className="md:w-16 md:h-16 w-12 h-12 rounded-full p-2 bg-violet-500 hover:bg-teal-500 transition-colors"
          />
        </a>

        <a href="mailto:j.mosgan@gmail.com">
          <img
            src={mailIcon}
            alt="Mail Icon"
            className="md:w-16 md:h-16 w-12 h-12 rounded-full p-2 bg-violet-500 hover:bg-teal-500 transition-colors"
          />
        </a>
      </div>
    </section>
  );
}
