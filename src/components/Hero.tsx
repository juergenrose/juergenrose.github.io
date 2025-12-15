import portraitImage from "../assets/myself.jpg";

export default function Hero() {
  return (
    <section className="flex justify-center items-center content-center px-4 py-10 bg-gray-950 rounded-t-xl border-b-1 border-emerald-500">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-0 ">
        <div className="flex content-center items-center mx-auto">
          <img
            src={portraitImage}
            alt="Bild des Webseiten Erstellers"
            className="  w-50 h-auto rounded-full bg-emerald-500"
          />
          ;
        </div>
        <div className="flex flex-col md:my-auto mx-auto md:mr-20 mt-10 text-center">
          <h1 className="hero-heading">
            Hallo, mein Name ist {" "}
            <span className="hero-span">J&uuml;rgen Mosgan</span>.
          </h1>
        </div>
      </div>
    </section>
  );
}
