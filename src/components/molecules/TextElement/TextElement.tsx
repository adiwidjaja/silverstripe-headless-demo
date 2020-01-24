import React from "react";
import styled from "styled-components";
import Container from "../../atoms/Container/Container";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Headline from "../../atoms/Headline/Headline";

export interface ITextElement {
  headline?: string;
  text: string;
  supersized?: boolean;
  centered?: boolean;
}

const TextElementStyled = styled.div``;

const TextElement: React.FunctionComponent<ITextElement> = ({
  headline,
  text,
  supersized,
  centered
}) => (
  <TextElementStyled>
    <Container>
      {text ? <Headline centered={centered}>{headline}</Headline> : null}
      <Paragraph supersized={supersized}>{text}</Paragraph>
    </Container>
  </TextElementStyled>
);

export default TextElement;
