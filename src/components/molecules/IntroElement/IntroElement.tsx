import React from "react";
import styled from "styled-components";
import media from "../../../utilities/media";
import Container from "../../atoms/Container/Container";
import Image from "../../atoms/Image/Image";
import Headline from "../../atoms/Headline/Headline";

export interface IIntroElement {
  imglink: string;
  imgalt?: string;
  headline: Array<{
    value: string;
  }>;
}

const ImageHolder = styled.div`
  display: block;
  width: 100%;
  ${media.moreThan("lg")} {
    width: 40%;
  }
`;

const TextHolder = styled.div`
  position: relative;
  display: block;
  width: 100%;
  ${media.moreThan("lg")} {
    width: 60%;
  }
`;

const IntroElement: React.FunctionComponent<IIntroElement> = ({
  imglink,
  imgalt,
  headline
}) => (
  <Container>
    <ImageHolder>
      <Image src={imglink} alt={imgalt} />
    </ImageHolder>
    <TextHolder>
      {headline.map((v, i) => {
        return <Headline>{headline[i].value}</Headline>;
      })}
    </TextHolder>
  </Container>
);

export default IntroElement;
