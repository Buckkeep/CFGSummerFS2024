import React, {useState, useEffect, useRef} from 'react'

function MyComponent() {

  const ref = useRef(0);

  useEffect(() => {
    console.log("Component rendered!")
  });

  function handleClick() {
    ref.current++;
    console.log(ref.current);
  }
    
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default MyComponent