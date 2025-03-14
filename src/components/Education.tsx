export default function Education() {
  return (
    <section className="flex flex-col mx-auto justify-center w-[800px] mt-20">
      <h2 className="experience-heading">Ausbildung</h2>
      <ul>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-1.5 before:h-full before:w-[1px] before:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-gray-800"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">01/2023 - laufend</p>
            <p className="experience-company-font">HTL Mössingerstraße</p>
            <p>Software-Engineering, Datenbanken & Informationssysteme</p>
            <div className="flex gap-2 my-4">
              <li className="experience-tools-tag">HTML5</li>
              <li className="experience-tools-tag">CSS3</li>
              <li className="experience-tools-tag">Bootstrap</li>
              <li className="experience-tools-tag">JavaScript</li>
              <li className="experience-tools-tag">Java</li>
              <li className="experience-tools-tag">JDCP</li>
              <li className="experience-tools-tag">JPA</li>
              <li className="experience-tools-tag">Rest API</li>
              <li className="experience-tools-tag">Spring Boot</li>
              <li className="experience-tools-tag">MySQL</li>
            </div>
          </div>
        </li>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-gray-800"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">09/2024 - 03/2025</p>
            <p className="experience-company-font">
              Coding School Wörthersee | FH Kärnten
            </p>
            <p>Modern Webdevelopment Lehrgang</p>
            <div className="flex gap-2 my-4">
              <li className="experience-tools-tag">HTML5</li>
              <li className="experience-tools-tag">CSS3</li>
              <li className="experience-tools-tag">JavaScript</li>
              <li className="experience-tools-tag">TypeScript</li>
              <li className="experience-tools-tag">React</li>
              <li className="experience-tools-tag">Rest API</li>
              <li className="experience-tools-tag">Vite</li>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
