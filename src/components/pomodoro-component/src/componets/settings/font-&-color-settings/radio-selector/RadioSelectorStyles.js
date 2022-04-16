import styled from 'styled-components';

export const RadionBtn = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;

  background-color: var(--color-${(props) => props.bgColor});
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: ${(props) => props.value}, sans-serif;
  background-image: ${(props) =>
    props.isSelected
      ? `url("data:image/svg+xml,%3Csvg width='15' height='11' viewBox='0 0 15 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5.5L4.95263 9.45263L13.4053 1' stroke='%23161932' stroke-width='2'/%3E%3C/svg%3E%0A")`
      : 'none'};

  background-repeat: no-repeat;
  background-position: center;

  &::before {
    position: absolute;
    content: '';
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 1px solid var(--color-gray);
    background-color: transparent;
    transform: scale(0.7);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    transform: scale(1);
    opacity: 1;
  }
`;
export const RadioContent = styled.p`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: 1.5rem;
  color: var(--color-${(props) => props.color});
  opacity: ${(props) => (props.color === 'white' ? '1' : '0.72')};
`;
