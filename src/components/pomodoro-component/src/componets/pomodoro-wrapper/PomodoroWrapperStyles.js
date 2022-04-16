import styled from 'styled-components';

export const PomodoroWrap = styled.main`
  width: 100%;
 
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${(props) => props.font}, sans-serif;

  .logo {
    margin-top: 2.8rem;

    @media (max-width: 480px) {
      margin-top: 1rem;
    }
  }

  .settings {
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 5;

    &:hover {
      path {
        opacity: 1;
      }
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;
