import { createFileRoute } from "@tanstack/react-router";
import Imprint from "../components/Imprint";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createFileRoute("/imprint")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
  <div className="max-w-[800px] mx-auto justify-center">
    <div className="my-3">
      <Header />
    </div>
    <div className="border border-gray-800 rounded-2xl pb-10 md-mx-auto mx-2">
      <Imprint />
    </div>
    <Footer />
  </div>

  );
}
