import React from 'react';
import style from './Message.module.css';

export type MessageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageDataType) {
    return (
      <div className={style.message}>
          <div className={style.avatar}>
              <img src={props.avatar} alt=""/>
          </div>
          <div className={style.container_box}>
              <div className={style.box}>
                  <div className={style.name}>
                      <span>{props.name}</span>
                  </div>
                  <div className={style.msg}>
                      <span>{props.message}</span>
                  </div>
                  <div className={style.time}>
                      <span>{props.time}</span>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Message