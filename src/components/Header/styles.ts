import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 3rem;
      height: 3rem;
      color: ${(props) => props.theme['gray-700']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: color 0.2s ease-out;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.green};
        border-radius: 3.5px;
      }

      &.active {
        color: ${(props) => props.theme.green};
        border-bottom: 3px solid ${(props) => props.theme.green};
        border-radius: 3.5px;
      }
    }
  }
`
