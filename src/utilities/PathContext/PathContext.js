import React from "react";

const PathContext = React.createContext({
  host: "",
  path: "",
  locale: "",
  rendering: "",
  url: ""
});

export default PathContext;
