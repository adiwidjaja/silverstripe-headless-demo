import React from "react";
import styled from "styled-components";
import Container from "../../atoms/Container/Container";
import TextContent from "../../atoms/TextContent/TextContent";
import Headline from "../../atoms/Headline/Headline";

export interface ITextElement {
  title?: string;
  content: string;
}

const TextElementStyled = styled.div``;

const TextElement: React.FunctionComponent<ITextElement> = ({
  title,
  content,
}) => (
  <TextElementStyled>
    <Container>
      {title ? <Headline>{title}</Headline> : null}
      <TextContent>{content}</TextContent>
    </Container>
  </TextElementStyled>
);

export default TextElement;
