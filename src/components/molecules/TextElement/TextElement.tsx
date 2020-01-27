import React from "react";
import styled from "styled-components";
import Container from "../../atoms/Container/Container";
import TextContent from "../../atoms/TextContent/TextContent";
import Headline from "../../atoms/Headline/Headline";

export interface ITextElement {
  headline?: string;
  text: string;
}

const TextElementStyled = styled.div``;

const TextElement: React.FunctionComponent<ITextElement> = ({
  headline,
  text,
}) => (
  <TextElementStyled>
    <Container>
      {text ? <Headline>{headline}</Headline> : null}
      <TextContent>{text}</TextContent>
    </Container>
  </TextElementStyled>
);

export default TextElement;
