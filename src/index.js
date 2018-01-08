import React from 'react'
import PropTypes from 'prop-types'

import s from './style'


const Timeline = ({ events }) =>
  <div className={s.container}>
    <ul className={s.timeline}>
      {events.map((event, index) =>
        <li className={s.event} key={index}>
          <label className={s.icon}></label>
          <div className={s.body}>
            <p className={s.date}>{event.interval}</p>
            <h3>{event.title}</h3>
            <h4>{event.subtitle}</h4>
            <div className={s.description}>
              {event.descriptions && event.descriptions.map((description, index) =>
                <p key={index}>
                  {description.title && <strong>{description.title}</strong>}
                  {description.title && <br />}
                  {description.body}
                </p>
              )}
              {event.description && <p>{event.description}</p>}
            </div>
          </div>
        </li>
      )}
    </ul>
  </div>


Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      interval: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      descriptions: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
        })
      ),
      description: PropTypes.string,
    })
  ),
}

export default Timeline