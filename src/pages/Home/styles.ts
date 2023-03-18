import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const BaseCountdownButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 8px;
  padding: 1rem;
  font-weight: bold;
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme['gray-700']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-dark']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme['gray-700']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-dark']};
  }
`
