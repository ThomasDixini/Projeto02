import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { HandPalm, Play } from 'phosphor-react'

import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no minímo 5')
    .max(60, 'O máximo precisa ser de no máximo 60'),
})

type InputTypes = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  
  const { activeCycle, createNewCycle, interruptCycle} = useContext(CyclesContext)

  const newCycleForm = useForm<InputTypes>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, /* reset */ } = newCycleForm

  const task = watch('task')
  const isTaskDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isTaskDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
