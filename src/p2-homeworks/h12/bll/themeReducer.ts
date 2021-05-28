const CHANGE_THEME = 'CHANGE_THEME'

type ChangeThemeType = {
  type: 'CHANGE_THEME'
  theme: string
}
type ActionType = ChangeThemeType

type InitialStateType = {
  themes: string[]
  selectedTheme: string
}

const initState = {
  themes: ['dark', 'red', 'green'],
  selectedTheme: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        selectedTheme: action.theme
      }
    }
    default:
      return state;
  }
};

export const changeThemeC = (theme: string): ChangeThemeType => ({
  type: CHANGE_THEME, theme
}); // fix any