import { renderToString } from "react-dom/server";
import App from "./App";

export async function prerender() {
  const html = renderToString(<App />);
  return {
    html,
    head: {
      lang: "en",
      title: "Gir Kesar Mangoes Hyderabad | Organic, Carbide-Free & Farm to Door",
    },
  };
}
