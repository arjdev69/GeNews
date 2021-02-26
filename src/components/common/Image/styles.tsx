import styled from "styled-components";

export const Box = styled.div`
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .full {
    transition: opacity 400ms ease 0ms;
  }

  .thumb {
    filter: blur(20px);
    transform: scale(1.1);
    transition: visibility 0ms ease 400ms;
    visibility: visible;
  }
`;
