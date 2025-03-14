export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center py-40 space-y-4 bg-gray-950 border-b-2 border-violet-400">
      <h1 className="hero-heading">
        Hallo, mein Name ist <span className="hero-span">Jürgen Mosgan</span>.
      </h1>
      <p className="hero-paragraph">Webentwickler und Linux Enthusiast</p>
      <button className="hero-btn">Kontakt aufnehmen</button>
    </section>
  );
}
