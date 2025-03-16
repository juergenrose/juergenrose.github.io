import { createFileRoute } from "@tanstack/react-router";
import DataPrivacy from "../components/DataPrivacy";

export const Route = createFileRoute("/privacy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DataPrivacy />
    </>
  );
}
