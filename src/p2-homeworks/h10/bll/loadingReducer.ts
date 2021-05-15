export type LoadingStateType = {
    isLoading: boolean
}
export type LoadingACType = {
    type: 'TOGGLE_IS_LOADING'
    isLoading: boolean
}
export type ActionTypes = LoadingACType

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

const initState: LoadingStateType = {
    isLoading: false
};

export const loadingReducer = (state: LoadingStateType = initState, action: ActionTypes): LoadingStateType => { // fix any
    switch (action.type) {
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean): LoadingACType => ({
    type: TOGGLE_IS_LOADING, isLoading
});