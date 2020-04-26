import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const ModuleB = () => (
  <>
    <h2>Module B</h2>
    {[123123, 213123132, 456456456, 456456456, 7687869789, 1111].map((countValue) => (
      <VisibilitySensor partialVisibility offset={{ bottom: 50 }} duration={0.3}>
        <div className="counter-value">
          <CountUp end={countValue} />
        </div>
      </VisibilitySensor>
    ))}
  </>
)

export default ModuleB
