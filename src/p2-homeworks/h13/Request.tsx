import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {createRequest} from "./RequestsAPI";

const Request = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [response, setResponse] = useState<any>('')

  const onClickButton = () => {
    createRequest(isChecked)
      .then(res => setResponse(res.data.info))
      .catch(error => setResponse(error.message))
  }

  return (
    <div>
      <SuperButton onClick={onClickButton}/>
      <SuperCheckbox onChangeChecked={setIsChecked}/>
      <div>{response}</div>
    </div>
  )
}

export default Request