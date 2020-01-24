import React from "react";
import styled from "styled-components";

export interface IImageElement {
  src: string;
  alt?: string;
  objectfit?: boolean;
}

interface IImageElementStyled {
  src: string;
  alt?: string;
  objectfit?: boolean;
}

const ActualImage = styled.img<IImageElementStyled>`
  display: block;
  ${props =>
    props.objectfit ? "object-fit: cover; object-position: 50% 50%;" : ""}
`;

const Image: React.FunctionComponent<IImageElement> = ({
  src,
  alt,
  objectfit = false
}) => <ActualImage src={src} alt={alt} objectfit={objectfit} />;

export default Image;
