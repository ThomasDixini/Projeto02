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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-700']};
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background-color: transparent;
  border: 0;
  outline: none;
  height: 2.5rem;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-700']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.green};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesCountdownInput = styled(BaseInput)`
  width: 4rem;
`

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
