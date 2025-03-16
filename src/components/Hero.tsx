export default function Hero() {
  return (
    <section className="flex justify-center pt-40 bg-gray-950 border-b-2 border-violet-400">
      <div className="w-2/3 grid grid-cols-2 gap-0">
        <div className="flex content-center items-center">
          <img
            src="/src/assets/myself.png"
            alt="Bild des Webseiten Erstellers"
            className="w-150 h-auto"
          />
        </div>
        <div className="flex flex-col gap-4 my-auto">
          <h1 className="hero-heading">
            Hallo, mein Name ist
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
