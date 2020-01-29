import React from "react";
import styled from "styled-components";
import Head from "next/head";
import TextElement from "../../molecules/TextElement/TextElement";
import PageHeader from "../PageHeader/PageHeader";
import FaqElement from "../../molecules/FaqElement/FaqElement";
import {IMenuItem} from "../../molecules/DesktopMenu/DesktopMenu";

export interface IPage {
  title?: string;
  siteTitle?: string;
  menu?: Array<IMenuItem>;
  // Content?: string, In our project, we ignore Content
  elements?: Array<any>;
}

const elementMap = {
  'App\\Elements\\FaqElement': FaqElement,
  'DNADesign\\Elemental\\Models\\ElementContent': TextElement,
};

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
      {elements ? elements.map((element, index) => {
        // @ts-ignore
        const ElementComponent: any = elementMap[element.className];
        // return (
        //   <TextElement key={`element-${index}`} text={element.content} headline={element.title}/>
        // );
        return <ElementComponent key={`element-${index}`} {...element}/>
      }) : null}
    </PageStyled>
  );
};

export default Page;
