import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="py-4 my-3">
      <div className="flex flex-col justify-center items-center ">
        <ul className="footer-bar">
          <li className="footer-link">
            <Link to="/imprint">Impressum</Link>
          </li>
          <li className="footer-link">
            <Link to="/privacy">Datenschutz</Link>
          </li>
        </ul>
        <p className="footer-paragraph-font">&copy; by J&uuml;rgen Mosgan</p>
        <p className="footer-paragraph-font mt-5"><a href="https://devicon.dev" className="footer-link">Icons by Devicon</a> – Licensed under the MIT License</p>
      </div>
    </footer>
  );
}
