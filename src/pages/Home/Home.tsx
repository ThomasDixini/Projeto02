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
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object(
  {
    task: zod
    .string()
    .min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(5, "O ciclo precisa ser de no minímo 5").max(60, "O máximo precisa ser de no máximo 60")
  }
)

type InputTypes = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
}

export function Home() {

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [amountSecondsPast, setAmountSecondsPast] = useState(0);

  const { register, handleSubmit, watch, formState: {errors}, reset } = useForm<InputTypes>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  });

  function handleCreateNewCycle(data: InputTypes) {
    const id = String(new Date().getTime());

    const newCycle : Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle]);
    setActiveId(id);
    setAmountSecondsPast(0);
    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id == activeId)

  useEffect(() => {
    let interval: any;

    if(activeCycle){
      interval = setInterval(() => {
        setAmountSecondsPast(differenceInSeconds(new Date(), activeCycle.startDate))
      },1000);
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")
  
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
            {...register('minutesAmount', {valueAsNumber: true})}
          />

          <span> minutos </span>
        </FormContainer>
        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span className="separator">:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isTaskDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
