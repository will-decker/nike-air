import styled, { keyframes } from 'styled-components';

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #0c093d;
  animation: ${fade} 4s normal forwards ease-in-out;
`;

export const Container = styled.div`
  font-family: 'Krona One', sans-serif;
  font-size: 16px;
  & h1 {
    color: #f8a140;
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Bungee', cursive;
    font-weight: 400;
    font-size: min(18vw, 3em);
    line-height: 0.85em;
  }
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  & a {
    text-decoration: none;
    &:hover {
      color: #f8a140;
    }
`;

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  & a {
    display: block;
    text-decoration: none;
    margin: 0.3px 0;
    &:hover {
      color: #f8a140;
    }
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #f8a140;
    margin-bottom: 6px;
  }
`;

export const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`;
