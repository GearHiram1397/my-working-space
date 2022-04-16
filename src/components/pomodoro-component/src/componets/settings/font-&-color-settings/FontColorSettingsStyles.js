import styled from 'styled-components';

export const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e3e1e1;
  padding: 2.4rem 0;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.7rem;
  }
`;

export const SelectorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 15.2rem;
  width: 100%;
`;
