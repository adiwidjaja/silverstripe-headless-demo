import montserratRegularWoff from "./montserrat-v14-latin-regular.woff";
import montserratRegularWoff2 from "./montserrat-v14-latin-regular.woff2";

import montserratBoldWoff from "./montserrat-v14-latin-700.woff";
import montserratBoldWoff2 from "./montserrat-v14-latin-700.woff2";

const fonts = `
  @font-face {
    font-family: Montserrat;
    font-weight: normal;
    src: url('${montserratRegularWoff2}') format('woff2');
    src: url('${montserratRegularWoff}') format('woff');
  }
  @font-face {
    font-family: Montserrat;
    font-weight: bold;
    src: url('${montserratBoldWoff2}') format('woff2');
    src: url('${montserratBoldWoff}') format('woff');
  }
  
`;

export default fonts;
