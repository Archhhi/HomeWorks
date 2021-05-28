import React from "react";
import s from "./SuperDoubleRange.module.css";
import {Slider} from '@material-ui/core'

type SuperDoubleRangePropsType = {
  onChangeRange?: (newValue: any) => void
  value?: any
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
    // min, max, step, disable, ...
  }
) => {
  // сделать самому, можно подключать библиотеки
  const handleChange = (event: any, newValue: any) => {
    onChangeRange && onChangeRange(newValue);
  };

  return (
    <div className={s.polzunokContainer}>
      <Slider
        style={{width: 300, marginTop: 0, marginLeft: 300}}
        onChange={handleChange}
        value={value}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}

export default SuperDoubleRange;
