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
          <button onClick={() => setIsOpen(true)} className="text-gray-500">
            <img src={hamburgerIcon} alt="" className="text-gray-400 p-2" />
          </button>
        </div>

        {/* Mobile menu modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center z-50"
            onClick={() => setIsOpen(false)} // close when click outside
          >
            <div
              className="mobile-menu relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-7 right-7"
              >
                <img
                  src={closeIcon}
                  alt=""
                  className="text-gray-400 hover:text-gray-400 p-1"
                />
              </button>

              {/* Mobile menu links */}
              <ul className="flex flex-col gap-6">
                <li className="nav-link text-center">
                  <Link to="/" onClick={() => setIsOpen(false)}>&Uuml;ber mich</Link>
                </li>
                <li className="nav-link text-center">
                  <Link to="/Experience" onClick={() => setIsOpen(false)}>Berufserfahrung</Link>
                </li>
                <li className="nav-link text-center">
                  <Link to="/Education" onClick={() => setIsOpen(false)}>Ausbildung</Link>                  
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
