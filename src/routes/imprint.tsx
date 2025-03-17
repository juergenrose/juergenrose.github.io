import { createFileRoute } from "@tanstack/react-router";
import Imprint from "../components/Imprint";

export const Route = createFileRoute("/imprint")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Imprint />
    </>
  );
}
