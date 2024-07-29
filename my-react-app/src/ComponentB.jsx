import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import { UserContext } from './ComponentA'

function ComponentB() {

    const user = useContext(UserContext);
  return (
    <div className='box'>
        <h1>ComponentB</h1>
        <h2>{`Hello ${user}, my old friend.`}</h2>
        <ComponentC />
    </div>
  )
}

export default ComponentB