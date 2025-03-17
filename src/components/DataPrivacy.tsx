import { Link } from "@tanstack/react-router";
import arrowIcon from "../assets/icons/arrow-left.svg";
import homeIcon from "../assets/icons/home.svg";

export default function DataPrivacy() {
  return (
    <section className="flex flex-col gap-1 md:mx-auto px-4 items-start justify-center content-start md:w-[800px] md:mt-20 mt-10">
      <div className="flex justify-center mx-auto gap-5">
        <Link to="/" className="home-btn">
          <img src={homeIcon} alt="zurück zur Startseite Button" />
          Startseite
        </Link>

        <Link to="/imprint" className="home-btn">
          Impressum
        </Link>
      </div>

      <h2 className="privacy-heading">Datenschutzerklärung</h2>
      <h3 className="privacy-middle-font">Datenschutz</h3>
      <p className="privacy-paragraph-font">
        Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen.
        Ich verarbeite deine Daten daher ausschließlich auf Grundlage der
        gesetzlichen Bestimmungen (DSGVO, TKG 2003). In dieser
        Datenschutzerklärung informiere ich dich über die wichtigsten Aspekte
        der Datenverarbeitung im Rahmen meiner Website.
      </p>
      <h3 className="privacy-middle-font">1. Kontakt zu mir</h3>
      <p className="privacy-paragraph-font">
        Wenn du über das Kontaktformular auf der Website mit mir in Verbindung
        trittst, werden deine angegebenen Daten (z.B. Name, E-Mail-Adresse und
        Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne
        deine Einwilligung weiter.
      </p>
      <h3 className="privacy-middle-font">2. Datenspeicherung</h3>
      <p className="privacy-paragraph-font">
        Die von dir im Rahmen der Nutzung des Kontaktformulars übermittelten
        Daten werden von mir für die Dauer der Bearbeitung der Anfrage und
        darüber hinaus nur so lange gespeichert, wie dies gesetzlich
        erforderlich ist oder zur Erfüllung vertraglicher Pflichten notwendig
        ist.
      </p>
      <h3 className="privacy-middle-font">3. Deine Rechte</h3>
      <p className="privacy-paragraph-font">
        Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
        Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch
        zu. Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das
        Datenschutzrecht verstößt oder deine datenschutzrechtlichen Ansprüche
        sonst in einer Weise verletzt worden sind, kannst du dich bei der
        Aufsichtsbehörde beschweren. In Österreich ist dies die
        Datenschutzbehörde.
      </p>
      <h3 className="privacy-middle-font">4. Kontakt</h3>
      <p className="privacy-paragraph-font">
        Für Fragen oder Anliegen zur Verarbeitung deiner personenbezogenen Daten
        kannst du mich unter den im Impressum angegebenen Kontaktdaten
        erreichen.
      </p>
    </section>
  );
}
