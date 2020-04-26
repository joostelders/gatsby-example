import React from 'react'
import ModuleA from '../modules/module-a'
import ModuleB from '../modules/module-b'

const Module = (props) => {
  const module = props.module
  switch (module) {
    case 'a':
      return <ModuleA {...module} />
    case 'b':
      return <ModuleB {...module} />
    default:
      return <></>
  }
}

export default Module
