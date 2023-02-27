import styled from 'styled-components'

export const ButtonComponent = styled.button`
  width: 200px;
  height: 200px;
  margin: 2rem;

  background-color: ${(props) => props.theme.primary};
`
