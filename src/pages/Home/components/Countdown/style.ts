import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-700']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-300']};
    padding: 2rem 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;

    &.separator {
      background-color: transparent;
      color: ${(props) => props.theme.green};
      padding: 2rem 0;
      width: 4rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      font-weight: bold;
    }
  }
`
