import styled from 'styled-components';

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 14rem;

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
export const TimerLabel = styled.label`
  font-size: var(--font-size-body-mobile);
  line-height: var(--line-height-body);

  color: var(--color-dark-blue);
  opacity: 0.4;
`;

export const TimerInput = styled.input`
  max-width: 14rem;
  width: 100%;
  height: 4.8rem;
  border: none;
  border-radius: 1rem;
  padding: 0 1.6rem;

  background-color: var(--color-gray);

  font-family: inherit;
  font-weight: 700;
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: url("data:image/svg+xml,%3Csvg width='14' height='21' viewBox='0 0 14 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6L7 2L13 6' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3Cpath d='M1 15L7 19L13 15' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3C/svg%3E%0A")
      no-repeat center center;
    height: 2.1rem;
    width: 1.4rem;
    opacity: 0.5;
    cursor: pointer;

    &:hover,
    &:active {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    height: 4rem;
  }
`;
