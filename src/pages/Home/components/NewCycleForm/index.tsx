import { FormContainer, MinutesCountdownInput, TaskInput } from './style'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { register } = useFormContext()

  return (
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
        step={1}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span> minutos </span>
    </FormContainer>
  )
}
