import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesCountdownInput,
  StartCountdownButton,
  TaskInput,
} from './styles'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

const newCycleFormValidationSchema = zod.object(
  {
    task: zod
    .string()
    .min(1, "Informe a tarefa"),
    minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no minímo 5")
    .max(60, "O máximo precisa ser de no máximo 60")
  }
)

export function Home() {

  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema)
  });

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isTaskDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <TaskInput
            id="task"
            placeholder="De um nome para seu projeto"
            list="projects-suggestions"
            {...register('task')}
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
            {...register('minutesAmount', {valueAsNumber: true})}
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

        <StartCountdownButton type="submit" disabled={isTaskDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
