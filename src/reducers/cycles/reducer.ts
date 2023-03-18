import { Cycle } from '../../contexts/CyclesContext'
import { ActionTypes } from './actions'

interface CyclesStatesReducer {
  cycles: Cycle[]
  activeId: string | null
}

export function CycleReducer(state: CyclesStatesReducer, action: any) {
  if (action.type === ActionTypes.ADD_NEW_CYCLE) {
    return {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeId: action.payload.newCycle.id,
    }
  }

  if (action.type === ActionTypes.INTERRUPT_CYCLE) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeId) {
          return { ...cycle, interruptDate: new Date() }
        } else {
          return cycle
        }
      }),
      activeId: null,
    }
  }

  if (action.type === ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
      activeId: null,
    }
  }

  return state
}
