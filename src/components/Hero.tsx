import portraitImage from "../assets/myself.png";

export default function Hero() {
  return (
    <section className="flex justify-center items-center content-center px-4 md:pt-40 pt-10 bg-gray-950 border-b-2 border-violet-400">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-0 ">
        <div className="flex content-center items-center mx-auto w-[600px]">
          <img
            src={portraitImage}
            alt="Bild des Webseiten Erstellers"
            className="md:w-150 w-100 h-auto"
          />
          ;
        </div>
        <div className="flex flex-col gap-2 my-auto justify-center w-[600px] content-center items-center text-center">
          <h1 className="hero-heading">
            Hallo, mein Name ist{" "}
            <span className="hero-span">Jürgen Mosgan</span>.
          </h1>
          <p className="hero-paragraph">Webentwickler und Linux Enthusiast</p>
          <a href="#aboutme" className="hero-btn">
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  );
}
