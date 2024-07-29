import React, {useContext} from 'react';
import ComponentD from './ComponentD'
import {UserContext} from './ComponentA';

function ComponentC() {

    const diffUser = useContext(UserContext)

  return (
    <div className='box'>
        <h1>ComponentC</h1>
        <h2>{`Hello again, ${diffUser}`}</h2>
        <ComponentD />
    </div>
  )
}

export default ComponentC