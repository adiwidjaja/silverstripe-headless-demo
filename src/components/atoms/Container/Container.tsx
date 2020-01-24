import * as React from 'react';
import styled from "styled-components";
import calcrem from "../../../utilities/calcrem/calcrem";
import media from "../../../utilities/media";

interface IContainer {
  children: React.ReactNode,
  sidebar?: React.ReactNode
}

const ContainerStyled = styled.div`
  width: 100%;
  max-width: ${calcrem(1120)};
  margin:0 auto 30px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;

  ${media.moreThan('md')} {
    margin-bottom: 60px;
  }

  ${media.moreThan('lg')} {
    flex-direction: row;
  }
`;

const ContainerMain = styled.div`
  ${media.moreThan('lg')} {
    flex:1 0 auto;
    width: calc(100% / 12 * 9);
    padding: 0 15px;
  }
`;

const ContainerSidebar = styled.div`
  ${media.moreThan('lg')} {
    width: calc(100% / 12 * 3);
    padding: 0 15px;
  }
`;

const Container: React.FunctionComponent<IContainer> = ({
  children,
  sidebar
}) =>
  (
    <ContainerStyled>
      <ContainerMain>
        {children}
      </ContainerMain>
      {sidebar && <ContainerSidebar>
        {sidebar}
      </ContainerSidebar>}
    </ContainerStyled>
  );

export default Container;
