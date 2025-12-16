import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import mailIcon from "../assets/icons/mail.svg";

export default function AboutMe() {
  return (
    <section
      className="flex flex-col items-center justify-center content-center mx-4 mt-7"
      id="aboutme"
    >
      <div className="flex mb-6">
        <ul className="flex gap-2">
          <li className="aboutme-tools-tag">Software Entwickler</li>
          <li className="aboutme-tools-tag">Linux Enthusiast</li>
        </ul>
      </div>
      <div className="flex mb-6">
        <ul className="tools-list">
          <li className="experience-tools-tag">HTML5</li>
          <li className="experience-tools-tag">CSS3</li>
          <li className="experience-tools-tag">TailwindCSS</li>
          <li className="experience-tools-tag">JavaScript</li>
          <li className="experience-tools-tag">Java</li>
          <li className="experience-tools-tag">Spring Boot</li>
          <li className="experience-tools-tag">MySQL</li>
          <li className="experience-tools-tag">Bash</li>
          <li className="experience-tools-tag">Linux</li>
        </ul>
      </div>
      <p className="aboutme-paragraph">
        Softwareentwicklung ist für mich mehr als nur ein Beruf – sie ist meine
        Leidenschaft, benutzerfreundliche und effiziente Anwendungen zu entwickeln. 
        Die Offenheit und Flexibilit&auml;t von Linux erweitern dabei kontinuierlich 
        meinen technologischen Horizont.
      </p>

      <div className="flex gap-4 mt-10 w-fit">
        <a href="https://www.linkedin.com/in/juergen-mosgan" target="_blank" className="bg-emerald-500 border-2 rounded-full p-1 hover:bg-gray-500 transition ease-in-out duration-300">     
          <img
            src={linkedinIcon}
            alt="LinkedIn Icon"
            className="w-16 h-16 rounded-full mx-auto py-4 bg-gray-200 border border-gray-800 " 
          />
        </a>
        <a href="https://github.com/juergenrose" target="_blank" className="bg-emerald-500 border-2 rounded-full p-1 hover:bg-gray-500 transition ease-in-out duration-300">
          <img
            src={githubIcon}
            alt="GitHub Icon"
            className="w-16 h-16 rounded-full mx-auto py-4 bg-gray-200 border border-gray-800"
          />
        </a>
        <a href="mailto:&#106;&#46;&#109;&#111;&#115;&#103;&#97;&#110;&#64;&#112;&#114;&#111;&#116;&#111;&#110;&#46;&#109;&#101;"  className="bg-emerald-500 border-2 rounded-full p-1 hover:bg-gray-500 transition ease-in-out duration-300">
          <img
            src={mailIcon}
            alt="Mail Icon"
            className="w-16 h-16 rounded-full mx-auto py-4 bg-gray-200 border border-gray-800"
          />  
        </a>
        </div>
    </section>
  );
} 
