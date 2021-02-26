import React from "react";

import useIntersectionObserver from "hooks/useIntersectionObserver";

import { Image } from "components";

import { Box } from "./styles";

export interface Props {
  onIsVisible: any;
  height: number;
  width: number;
  url: string;
  src: string;
  thumb: string;
  alt: string;
}

const LazyImage: React.FC<Props> = (props) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: (
      [{ isIntersecting }]: any,
      observerElement: { unobserve: (arg0: undefined) => void }
    ) => {
      if (isIntersecting) {
        if (!isVisible) {
          props.onIsVisible();
          setIsVisible(true);
        }
        observerElement.unobserve(ref.current);
      }
    },
  });

  const aspectRatio = (props.height / props.width) * 100;

  return (
    <Box>
      <a
        ref={ref}
        href={props.url}
        rel="noopener noreferrer"
        className="image-container"
        style={{ paddingBottom: `${aspectRatio}%` }}
      >
        {isVisible && (
          <Image src={props.src} thumb={props.thumb} alt={props.alt} />
        )}
      </a>
    </Box>
  );
};

export default LazyImage;
