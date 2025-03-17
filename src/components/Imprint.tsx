import { Link } from "@tanstack/react-router";

export default function Imprint() {
  return (
    <section className="flex flex-col gap-1 md:mx-auto px-4 items-start justify-center content-start md:w-[800px] md:mt-20 mt-10">
      <Link to="/" className="home-btn">
        <img
          src="/src/assets/icons/arrow-left.svg"
          alt="zurück zur Startseite Button"
        />
      </Link>

      <h2 className="imprint-heading">Impressum</h2>
      <h3 className="imprint-middle-font">
        Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO
        und § 14 UGB
      </h3>
      <h3 className="imprint-middle-font mt-5">Name des Website-Betreibers:</h3>
      <p className="imprint-paragraph-font">Jürgen Mosgan</p>
      <h3 className="imprint-middle-font mt-5">Kontakt:</h3>
      <p className="imprint-paragraph-font">
        <b className="text-bold text-teal-500">E-Mail:</b> j.mosgan@gmail.com
      </p>
      <h3 className="imprint-middle-font mt-5">
        Hinweis zur Verantwortlichkeit:
      </h3>
      <p className="imprint-paragraph-font">
        Als Privatperson bin ich für die Inhalte auf dieser Website
        verantwortlich. Die hier pr&auml;sentierten Inhalte sind nach bestem
        Wissen und Gewissen erstellt.
      </p>
    </section>
  );
}
