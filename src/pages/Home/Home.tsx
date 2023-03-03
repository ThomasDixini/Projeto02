import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesCountdownInput,
  StartCountdownButton,
  TaskInput,
} from './styles'
import { Play } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <TaskInput
            id="task"
            placeholder="De um nome para seu projeto"
            list="projects-suggestions"
          />

          <datalist id="projects-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount"> durante </label>
          <MinutesCountdownInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span> minutos </span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span className="separator">:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
