import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
