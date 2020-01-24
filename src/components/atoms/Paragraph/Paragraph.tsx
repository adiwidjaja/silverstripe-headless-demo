import * as React from "react";
import styled from "styled-components";
import { copytext, supersizedcopytext } from "../../../styles/typography";

interface IParagraph {
  children: string;
  className?: string;
  margin?: boolean;
  supersized?: boolean;
}

interface IParagraphStyled {
  margin: boolean;
  supersized: boolean;
}

export const ParagraphStyled = styled.div<IParagraphStyled>`
  ${props => (props.supersized ? supersizedcopytext : copytext)};
  ${props => (props.margin ? "margin-bottom: 1em" : null)};
`;

const Paragraph: React.FunctionComponent<IParagraph> = ({
  children,
  className,
  supersized = false,
  margin = false
}) => {
  return (
    <ParagraphStyled
      dangerouslySetInnerHTML={{ __html: children }}
      className={className}
      margin={margin}
      supersized={supersized}
    />
  );
};

Paragraph.defaultProps = {
  className: ""
};

export default Paragraph;
