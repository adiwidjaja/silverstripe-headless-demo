import React from "react";
import Headline from "./Headline";

export default { title: "Atoms/Headline" };

export const h1 = () => (
  <Headline>
    Industriekaufmann (m/w/d) - Vertriebsinnendienst mit Übernahmeoption
  </Headline>
);
export const h2 = () => (
  <Headline level={2}>
    Industriekaufmann (m/w/d) - Vertriebsinnendienst mit Übernahmeoption
  </Headline>
);
export const h3 = () => (
  <Headline level={3}>
    Industriekaufmann (m/w/d) - Vertriebsinnendienst mit Übernahmeoption
  </Headline>
);
export const centered = () => <Headline centered>Industriekaufmann</Headline>;
