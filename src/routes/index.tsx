import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
    </>
  );
}
