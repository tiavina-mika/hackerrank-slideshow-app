import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

import App from "./App";

const SLIDES = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises."
  },
  {
    title: "First, 10 push-ups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush."
  },
  {
    title: "Next, 20 squats",
    text: "Squats are important. Remember to keep your back straight."
  },
  {
    title: "Finally, 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion."
  },
  {
    title: "Great job!",
    text: "You made it, have a nice day and see you next time!"
  }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App slides={SLIDES} />
  </StrictMode>
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
