import type { MetaFunction } from "@remix-run/node";
import ShareLinks from "~/components/share-links";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <ShareLinks />
    </div>
  );
}
