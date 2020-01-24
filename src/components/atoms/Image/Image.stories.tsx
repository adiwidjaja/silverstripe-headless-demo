import React from "react";
import Image from "./Image";

export default { title: "Atoms/Image" };

export const image = () => (
  <Image src="http://www.placekitten.com/400/600" alt="sdfjkhsdf" />
);

export const objectFitImage = () => (
  <Image src="http://www.placekitten.com/400/600" alt="sdfjkhsdf" objectfit />
);
