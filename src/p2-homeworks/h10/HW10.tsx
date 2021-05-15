import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingStateType} from "./bll/loadingReducer";
import {Dispatch} from "redux";
import preloader from './asssets/image/preloader.svg'

function HW10() {
  let state = useSelector<AppStoreType, LoadingStateType>(state => state.loading)
  let dispatch = useDispatch<Dispatch>()
  const isLoading = state.isLoading;

  const setLoading = () => {
    // dispatch
    dispatch(loadingAC(true))

    // setTimeout
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 2000)
  };

  return (
    <div>
      <hr/>
      homeworks 10

      {/*should work (должно работать)*/}
      {isLoading
        ? (
          <div>
            <img src={preloader} alt="preloader"/>
          </div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  );
}

export default HW10;
