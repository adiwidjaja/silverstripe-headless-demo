import React from "react";
import TextElement from "./TextElement";

export default { title: "Molecules/TextElement" };

export const example = () => (
  <TextElement
    headline="Dies ist eine Headline"
    text="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
  />
);

export const supersizedExample = () => (
  <TextElement
    headline="Headline"
    text="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
    supersized
    centered
  />
);
