import styled from 'styled-components';

export const TimeSelectWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2.4rem 0;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;
