import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-10 mt-20 border-t-2 border-violet-400 ">
      <div className="flex flex-col justify-center items-center ">
        <ul className="footer-bar">
          <li className="footer-link">
            <Link to="/imprint">Impressum</Link>
          </li>
          <li className="footer-link">
            <Link to="/privacy">Datenschutz</Link>
          </li>
        </ul>
        <p className="footer-paragraph-font">&copy; by Jürgen Mosgan</p>
        <p className="footer-paragraph-font mt-5"><a href="https://devicon.dev">Icons by Devicon</a> – Licensed under the MIT License</p>
      </div>
    </footer>
  );
}
