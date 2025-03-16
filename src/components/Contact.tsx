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
            src="/src/assets/icons/linkedin.svg"
            alt="linkedin icon"
            className="w-16 h-16 rounded-full p-2 bg-violet-500 hover:bg-teal-500 transition-colors"
          />
        </a>

        <a href="https://github.com/juergenrose" target="_blank">
          <img
            src="/src/assets/icons/github.svg"
            alt="github icon"
            className="w-16 h-16 rounded-full p-2 bg-violet-500 hover:bg-teal-500 transition-colors"
          />
        </a>

        <a href="mailto:j.mosgan@gmail.com">
          <img
            src="/src/assets/icons/mail.svg"
            alt="github icon"
            className="w-16 h-16 rounded-full p-2 bg-violet-500 hover:bg-teal-500 transition-colors"
          />
        </a>
      </div>
    </section>
  );
}
