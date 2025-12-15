export default function Education() {
  return (
    <section
      className="flex flex-col md:mx-auto px-4 items-start justify-center content-start md:w-[800px] mt-10"
      id="education"
    >
      <h2 className="experience-heading">Ausbildung</h2>
      <ul>
        <li className="experience-container">
          <div className="before:absolute before:left-1.5 before:h-full before:w-[1px] before:bg-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-emerald-500"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">01/2023 - laufend</p>
            <p className="experience-company-font">HTL M&ouml;ssingerstraße</p>
            <p className="experience-paragraph-font">
              Software-Engineering, Datenbanken & Informationssysteme
            </p>
            <div className="flex my-4">
              <ul className="tools-list">
                <li className="experience-tools-tag">HTML5</li>
                <li className="experience-tools-tag">CSS3</li>
                <li className="experience-tools-tag">Bootstrap</li>
                <li className="experience-tools-tag">JavaScript</li>
                <li className="experience-tools-tag">Java</li>
                <li className="experience-tools-tag">JPA</li>
                <li className="experience-tools-tag">Spring Boot</li>
                <li className="experience-tools-tag">Rest API</li>
                <li className="experience-tools-tag">MySQL</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="experience-container">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-emerald-500"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">09/2024 - 03/2025</p>
            <p className="experience-company-font">
              FH K&auml;rnten | Coding School W&ouml;rthersee
            </p>
            <p className="experience-paragraph-font">
              Modern Webdevelopment Lehrgang
            </p>
            <div className="flex my-4">
              <ul className="tools-list">
                <li className="experience-tools-tag">HTML5</li>
                <li className="experience-tools-tag">CSS3</li>
                <li className="experience-tools-tag">SCSS</li>
                <li className="experience-tools-tag">TailwindCSS</li>
                <li className="experience-tools-tag">JavaScript</li>
                <li className="experience-tools-tag">TypeScript</li>
                <li className="experience-tools-tag">ReactJS</li>
                <li className="experience-tools-tag">Rest API</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
