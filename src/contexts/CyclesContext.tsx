import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  AddNewCycleAction,
  InterruptCycleAction,
  MarkCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { CycleReducer } from '../reducers/cycles/reducer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface CreateNewCycleType {
  task: string
  minutesAmount: number
}

interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeId: string | null
  amountSecondsPast: number
  markCurrentCycleFinished: () => void
  secondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateNewCycleType) => void
  interruptCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(CycleReducer, {
    cycles: [],
    activeId: null,
  })

  const { cycles, activeId } = cyclesState
  const [amountSecondsPast, setAmountSecondsPast] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeId)

  function createNewCycle(data: CreateNewCycleType) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(AddNewCycleAction(newCycle))
    setAmountSecondsPast(0)
  }

  function interruptCycle() {
    dispatch(InterruptCycleAction)
  }

  function markCurrentCycleFinished() {
    dispatch(MarkCurrentCycleAsFinishedAction)
  }

  function secondsPassed(seconds: number) {
    setAmountSecondsPast(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeId,
        amountSecondsPast,
        markCurrentCycleFinished,
        secondsPassed,
        createNewCycle,
        interruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
