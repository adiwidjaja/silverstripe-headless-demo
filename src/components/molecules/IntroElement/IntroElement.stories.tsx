import React from "react";
import IntroElement from "./IntroElement";

export default { title: "Molecules/IntroElement" };

const headline = [
  { value: "Wir unterstützen Veränderung." },
  { value: "Wir ermöglichen Entwicklung." }
];

export const introelement = () => (
  <IntroElement
    imglink="http://www.placekitten.com/400/400"
    imgalt="Placekitten Image"
    headline={headline}
  />
);
