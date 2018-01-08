import React from 'react'

import s from './style'


export const Timeline = ({ children }) =>
  <div className={s.container}>
    <ul className={s.timeline}>
      {children}
    </ul>
  </div>

export const Event = ({ title, subtitle, interval, children }) =>
  <li className={s.event}>
    <label className={s.icon}></label>
    <div className={s.body}>
      <p className={s.date}>{interval}</p>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className={s.description}>
        {children}
      </div>
    </div>
  </li>
