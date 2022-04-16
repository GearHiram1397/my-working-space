import styled from 'styled-components';

export const Time = styled.h1`
  font-weight: ${(props) => props.fontW};
  letter-spacing: ${(props) => (props.fontW === '500' ? '5px' : '-1px')};
  color: var(--color-very-light-blue);
  width: fit-content;
  margin-right: ${(props) => (props.fontW === '500' ? '1rem' : '0')};
  @media (max-width: 480px) {
    font-size: 8rem;
  }
`;
