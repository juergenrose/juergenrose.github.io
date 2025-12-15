import { useState } from "react";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="nav">
        {/* Desktop navigation */}
        <ul className="nav-bar">
          <li className="nav-link">
            <Link to="/">&Uuml;ber mich</Link>
          </li>
          <li className="nav-link">
            <Link to="/Experience">Berufserfahrung</Link>
          </li>
          <li className="nav-link">
            <Link to="/Education">Ausbildungen</Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setIsOpen(true)}>
            <img src={hamburgerIcon} alt="" className="text-emerald-400 p-2" />
          </button>
        </div>

        {/* Mobile menu modal */}
        {isOpen && (
          <div className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-700 
            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setIsOpen(false)}>
          <div className={`mobile-menu transform transition-all duration-700 ease-in-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-7 right-2">
              <img src={closeIcon} alt="" />
            </button>

            <ul className="flex flex-col gap-6">
              <li className="nav-link text-center">
                <Link to="/" onClick={() => setIsOpen(false)}>Über mich</Link>
              </li>
              <li className="nav-link text-center">
                <Link to="/Experience" onClick={() => setIsOpen(false)}>Berufserfahrung</Link>
              </li>
              <li className="nav-link text-center justify-end">
                <Link to="/Education" onClick={() => setIsOpen(false)}>Ausbildung</Link>
              </li>
              <div className="flex text-sm fixed bottom-0 right-5">
              <li className="footer-link text-center">
                <Link to="/privacy" onClick={() => setIsOpen(false)}>Datenschutz</Link>
              </li>
              <li className="footer-link text-center">
                <Link to="/imprint" onClick={() => setIsOpen(false)}>Impressum</Link>
              </li>
              </div>
            </ul>
          </div>
        </div>

        )}
      </nav>
    </header>
  );
}
