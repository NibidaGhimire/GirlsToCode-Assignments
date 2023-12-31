import React, { useContext } from 'react'
import {fruitContext} from "./ExampleContext"
const ChildB = () => {

    const fruit = useContext(fruitContext)
  return (
    <div>
      {fruit}
    </div>
  )
}

export default ChildB
