import React from "react";

import { Box } from "./styles";

export interface Props {
  alt: string;
  thumb: string;
  src: string;
}

const Image: React.FC<Props> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <Box>
      <img
        className="image thumb"
        alt={props.alt}
        src={props.thumb}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props.alt}
        src={props.src}
      />
    </Box>
  );
};

export default Image;
