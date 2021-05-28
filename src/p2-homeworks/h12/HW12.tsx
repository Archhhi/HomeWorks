import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

function HW12() {
  const themes = useSelector<AppStoreType, string[]>(state => state.theme.themes); // useSelector
  const theme = useSelector<AppStoreType, string>(state => state.theme.selectedTheme);

  // useDispatch, onChangeCallback
  const dispatch = useDispatch()

  const onChangeTheme = (theme: string) => {
    dispatch(changeThemeC(theme))
  }
debugger
  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
        homeworks 12
      </span>

      {/*should work (должно работать)*/}
      <SuperSelect
        options={themes}
        onChangeOption={onChangeTheme}
      />

      <hr/>
    </div>
  );
}

export default HW12;
