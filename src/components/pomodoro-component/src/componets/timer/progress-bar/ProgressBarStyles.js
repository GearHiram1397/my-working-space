import styled from 'styled-components';

export const ProgressSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -11;
  transform: rotate(270deg);
  transform-origin: center;
`;

export const SvgCircle = styled.circle`
  stroke-linecap: round;
  stroke: var(--color-${(props) => props.themeColor});
`;
