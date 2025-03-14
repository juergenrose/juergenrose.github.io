export default function Experience() {
  return (
    <section
      className="flex flex-col mx-auto items-start justify-center content-start w-[800px] mt-20"
      id="experience"
    >
      <h2 className="experience-heading">Berufserfahrung</h2>
      <ul>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-1.5 before:h-full before:w-[1px] before:bg-teal-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-teal-600"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">04/2024 - laufend</p>
            <p className="experience-company-font">
              Fullstack Developer bei Shel Software & Engineering
            </p>
            <p className="experience-paragraph-font">
              Entwicklung des Report Generator, einer umfassende Lösung für die
              Erstellung und Bearbeitung verschiedener Arten von Berichten,
              einschließlich JSON-, CSV- und PDF-Formaten. Das Projekt nutzt
              mehrere SQL Datenbanken und bietet ein robustes Backend mit
              anpassbaren Berichtsparametern und Vorschlägen. Die API ist zur
              einfachen Integration und Prüfung mit Swagger dokumentiert.
            </p>
            <div className="flex my-4">
              <ul className="list-none flex gap-2">
                <li className="experience-tools-tag">HTML5</li>
                <li className="experience-tools-tag">CSS3</li>
                <li className="experience-tools-tag">JavaScript</li>
                <li className="experience-tools-tag">NodeJS</li>
                <li className="experience-tools-tag">Rest API</li>
                <li className="experience-tools-tag">Swagger</li>
                <li className="experience-tools-tag">XSLT</li>
                <li className="experience-tools-tag">MySQL</li>
                <li className="experience-tools-tag">MSSQL</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-1.5 before:h-full before:w-[1px] before:bg-teal-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-teal-600"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">12/2023 - 04/2024</p>
            <p className="experience-company-font">
              Praktikum als Fullstack Developer bei SimpleWay Technologies
            </p>
            <p className="experience-paragraph-font">
              Einführung in die Fullstack Webentwicklung, Entwicklung eines
              Gerätemanagers mit CRUD-Funktionalität, Implementierung der
              Benutzer-Authentifizierung (Login, Registrierung), Erstellung
              eines Admin- und User-Dashboards zur Verwaltung der Geräte
            </p>
            <div className="flex my-4">
              <ul className="list-none flex gap-2">
                <li className="experience-tools-tag">HTML5</li>
                <li className="experience-tools-tag">CSS3</li>
                <li className="experience-tools-tag">JavaScript</li>
                <li className="experience-tools-tag">NodeJS</li>
                <li className="experience-tools-tag">Rest API</li>
                <li className="experience-tools-tag">Python</li>
                <li className="experience-tools-tag">Django</li>
                <li className="experience-tools-tag">MySQL</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-1.5 before:h-full before:w-[1px] before:bg-teal-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-teal-600"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">2007 - 2023</p>
            <p className="experience-company-font">
              Handwerker bei diversen Unternehmen
            </p>
          </div>
        </li>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-teal-600"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="experience-date-font">2004 - 2007</p>
            <p className="experience-company-font">
              Maurerlehre bei Johann Müller Plan & Bau GmbH
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
