export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case "check": {
            const newState = [...state].filter(el => el.age >= 18)
            return newState
        }
        default: return state
    }
};