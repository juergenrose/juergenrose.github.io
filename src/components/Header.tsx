import { useState } from "react";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="nav">
        {/* Desktop navigation */}
        <ul className="nav-bar">
          <li className="nav-link">
            <a href="#aboutme">Über mich</a>
          </li>
          <li className="nav-link">
            <a href="#experience">Berufserfahrung</a>
          </li>
          <li className="nav-link">
            <a href="#education">Ausbildung</a>
          </li>
          <li className="nav-link">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setIsOpen(true)} className="text-violet-500">
            <img src={hamburgerIcon} alt="" className="text-violet-400 p-2" />
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
                  className="text-teal-400 hover:text-violet-400 p-1"
                />
              </button>

              {/* Mobile menu links */}
              <ul className="flex flex-col gap-6">
                <li className="nav-link text-center">
                  <a href="#aboutme" onClick={() => setIsOpen(false)}>
                    Über mich
                  </a>
                </li>
                <li className="nav-link text-center">
                  <a href="#experience" onClick={() => setIsOpen(false)}>
                    Berufserfahrung
                  </a>
                </li>
                <li className="nav-link text-center">
                  <a href="#education" onClick={() => setIsOpen(false)}>
                    Ausbildung
                  </a>
                </li>
                <li className="nav-link text-center">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
