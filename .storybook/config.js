import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../src/styles/globals';
import defaultTheme from '../src/constants/themes/defaultTheme/defaultTheme';

addDecorator(s => <>
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />{s()}
    </>
  </ThemeProvider>
</>);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
