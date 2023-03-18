import { createContext, ReactNode, useState } from "react"

interface Cycle {
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

export const CyclesContext = createContext({} as CyclesContextData);

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({children}: CyclesContextProviderProps) {

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeId, setActiveId] = useState<string | null>(null)
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

        setCycles((state) => [...state, newCycle])
        setActiveId(id)
        setAmountSecondsPast(0)
        //reset()
    }
    
    function interruptCycle() {
    setCycles(
        cycles.map((cycle) => {
        if (cycle.id === activeId) {
            return { ...cycle, interruptDate: new Date() }
        } else {
            return cycle
        }
        }),
    )

    setActiveId(null)
    }

    function markCurrentCycleFinished() {
        setCycles(
            cycles.map((cycle) => {
                if (cycle.id === activeId) {
                    return { ...cycle, finishedDate: new Date() }
                } else {
                    return cycle
                }
            }),
        )
    }
    
    function secondsPassed(seconds: number) {
        setAmountSecondsPast(seconds)
    }

    return(
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
    );
}