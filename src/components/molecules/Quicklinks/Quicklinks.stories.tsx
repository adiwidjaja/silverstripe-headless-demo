import React from "react";
import Quicklinks from "./Quicklinks";
import Quicklink from "../../atoms/Quicklink/Quicklink";

export default { title: "Molecules/Quicklinks" };

export const quicklink = () => (
  <Quicklinks position="right">
    <Quicklink link="http://www.placekitten.com/100/500" target="_blank">
      Wie wir arbeiten
    </Quicklink>
    <Quicklink link="http://www.placekitten.com/300/700" target="_blank">
      Wie wir sind
    </Quicklink>
    <Quicklink link="http://www.placekitten.com/600/200" target="_blank">
      Was und inspiriert
    </Quicklink>
  </Quicklinks>
);
