import React from "react";
import styled from "styled-components";
import Head from "next/head";
import TextElement from "../../molecules/TextElement/TextElement";
import PageHeader from "../PageHeader/PageHeader";
import {IMenuItem} from "../../molecules/DesktopMenu/DesktopMenu";

export interface IPage {
  title?: string;
  siteTitle?: string;
  menu?: Array<IMenuItem>;
  // Content?: string, In our project, we ignore Content
  elements?: Array<any>;
}

const PageStyled = styled.div``;

const Page: React.FunctionComponent<IPage> = ({
  title,
  siteTitle,
  menu,
  elements,
}) => {
  console.log(elements);
  return (
    <PageStyled>
      <Head>
        <title>{title} - {siteTitle}</title>
      </Head>
      <PageHeader menu={menu} siteTitle={siteTitle}/>
      {elements ? elements.map((element, index) => (
        <TextElement key={`element-${index}`} text={element.content} headline={element.title}/>
      )) : null}
    </PageStyled>
  );
};

export default Page;
