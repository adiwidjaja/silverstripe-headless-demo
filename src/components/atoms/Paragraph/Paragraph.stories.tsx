import React, { Fragment } from "react";
import Paragraph from "./Paragraph";

export default { title: "Atoms/Paragraph" };

export const example = () => (
  <Paragraph>
    Industriekaufmann (m/w/d) - Vertriebsinnendienst mit Übernahmeoption
  </Paragraph>
);
export const supersizedexample = () => (
  <Fragment>
    <Paragraph supersized>
      Eine gut geführte Organisation ist energiegeladen und begeistert von dem,
      was sie tut. Sie ist kreativ, zielorientiert, mutig und flexibel. Ihre
      Ziele sind klar, ihre Aktionen überlegt. Sie liefert Ergebnisse und
      entwickelt Potentiale. Ihre Führungskräfte überzeugen menschlich und sind
      fachlich exzellent. Eine solche Organisation hat jede Chance auf Erfolg.
    </Paragraph>
    <Paragraph supersized>Wir unterstützen Sie auf Ihrem Weg.</Paragraph>
  </Fragment>
);
