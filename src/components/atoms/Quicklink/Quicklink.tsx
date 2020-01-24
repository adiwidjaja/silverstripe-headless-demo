import React from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import media from "../../../utilities/media";

export interface ITextElement {
  link: string;
  children: React.ReactNode;
  target?: string;
}

const ActualQuicklink = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  margin: 0 40px 0 0;
  padding: 0 30px 0 0;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 5px;
    width: 15px;
    height: 15px;
    border-bottom: 3px solid ${props => props.theme.colors.primary};
    border-right: 3px solid ${props => props.theme.colors.primary};
    transform: translateY(-50%) rotate(-45deg);
    transition: right 0.3s ease;
  }
  &:hover {
    ${media.moreThan("lg")} {
      &::before {
        right: -5px;
      }
    }
  }
`;

const LinkHeadline = styled(Headline)`
  display: inline-block;
  margin: 0;
`;

const TestContainer = styled.div`
  display: block;
`;

const Quicklink: React.FunctionComponent<ITextElement> = ({
  link,
  children,
  target = "_blank"
}) => (
  <TestContainer>
    <ActualQuicklink href={link} target={target}>
      <LinkHeadline level={2}>{children}</LinkHeadline>
    </ActualQuicklink>
  </TestContainer>
);

export default Quicklink;
