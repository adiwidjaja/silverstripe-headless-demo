import React from "react";
import styled from "styled-components";
import media from "../../../utilities/media";
import Container from "../../atoms/Container/Container";

export interface ITextElement {
  children: React.ReactNode;
  position?: string;
}

interface IActualQuicklinks {
  position?: string;
}

const ActualQuicklinks = styled.div<IActualQuicklinks>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props =>
    props.position == "right" ? "flex-end" : "flex-start"};
  position: relative;
  ${media.moreThan("lg")} {
    & > div:nth-last-child(1) {
      & > a {
        margin: 0;
        transition: margin 0.3s ease;
        &:hover {
          margin: 0 10px 0 0;
        }
      }
    }
  }
  ${media.lessThan("lg")} {
    flex-direction: column;
    & > div {
      display: flex;
      justify-content: center;
      margin: 40px 0;
      &:nth-child(1) {
        margin: 0 0 40px;
      }
      &:nth-last-child(1) {
        margin: 40px 0 0;
      }
      & > a {
        margin: 0;
      }
    }
  }
`;

const Quicklink: React.FunctionComponent<ITextElement> = ({
  children,
  position
}) => (
  <Container>
    <ActualQuicklinks position={position}>{children}</ActualQuicklinks>
  </Container>
);

export default Quicklink;
