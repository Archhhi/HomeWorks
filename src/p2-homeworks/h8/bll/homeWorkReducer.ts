import {UserType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check'
    payload?: 'up' | 'down'
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a, b) => (a.name > b.name ? 1 : -1))
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case "check": {
            const newState = [...state].filter(el => el.age >= 18)
            return newState
        }
        default: return state
    }
};