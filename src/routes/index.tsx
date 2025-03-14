import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ContactForm from "../components/ContactForm";

const queryClient = new QueryClient();

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <ContactForm />
      </QueryClientProvider>
    </>
  );
}
