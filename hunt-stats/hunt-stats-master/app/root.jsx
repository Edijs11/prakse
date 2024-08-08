import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import Data from "./routes/data";

import styles from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Data />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
