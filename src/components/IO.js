import React, { useState } from "react";
import styled from "styled-components";

// TODO: Fix this container to the top of the page, so that when a user scrolls, it remains at the top.
const Container = styled.div``;

const IO = () => {
  const [state, setState] = useState({
    mouse: { x: 0, y: 0 },
    screen: { width: 0, height: 0 },
  });

  const getMousePosition = (e) =>
    setState((s) => ({
      ...state,
      mouse: {
        x: e.clientX,
        y: e.clientY,
      },
    }));

  const getWindowDimensions = () =>
    setState((state) => ({
      ...state,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }));

  // TODO: Listen to window mousemove and window resize.
  // TODO: Remove listeners.
  React.useEffect(() => {
    getWindowDimensions();
  }, []);

  const { mouse, screen } = state;

  return (
    <Container>
      <h1>Input/Output</h1>
      <ul>
        <li>
          Mouse position: ({mouse.x}, {mouse.y})
        </li>
        <li>
          Window dimensions: {screen.width}x{screen.height}
        </li>
      </ul>
    </Container>
  );
};

export default IO;
