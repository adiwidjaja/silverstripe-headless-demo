import React from 'react';
import {NextPage} from "next";
import fetch from 'isomorphic-unfetch';
import {ThemeProvider} from "styled-components";
import getConfig from 'next/config';

import defaultTheme from '../src/constants/themes/defaultTheme/defaultTheme';
import GlobalStyle from '../src/styles/globals';

import PathContext from '../src/utilities/PathContext/PathContext';
import Page from "../src/components/organisms/Page/Page";

interface IIndex {
  data: any,
  path: string,
  host: string,
  rendering: string,
}

const Index: NextPage<IIndex> = ({
  data,
  path,
  host,
  rendering
}) => {
  const pos = path.search('\\?');
  let pathWithoutQueryString = path;
  if (pos !== -1) pathWithoutQueryString = path.substring(0, pos);

  let title = '';
  if (data.meta ) {
    ({ title } = data.meta); //Todo
  }

  return (
    <ThemeProvider
      theme={defaultTheme}
    >
      <GlobalStyle />
      <PathContext.Provider value={{
        host,
        path: pathWithoutQueryString,
        title,
        rendering,
        url: `${host}${path}`,
      }}
      >
        <Page {...data}/>
      </PathContext.Provider>
    </ThemeProvider>
  );
};

Index.getInitialProps = async ({
  query,
  asPath,
  req,
  res,
}) => {
  const { publicRuntimeConfig:env } = getConfig();

  const path = `${env.API_PATH}${asPath}`;
  console.error(path);

  let frontendHost = '';
  let rendering = '';

  if (typeof req === 'undefined') {
    // Client
    rendering = 'client';
    frontendHost = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  } else if (req.connection) {
    // Server
    rendering = 'server';
    frontendHost = `https://${req.headers.host}`;
  } else {
    // Export
    rendering = 'export';
    frontendHost = '';
  }

  const response = await fetch(path, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return {
    data: json.data,
    host: frontendHost,
    path: asPath || '',
    rendering,
  }
};

export default Index;
