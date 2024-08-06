import { useState, useEffect } from 'react'

function FuncCounter() {
    const [count, setCount] = useState(0)
    console.log(count)
    console.log(setCount)

    const increment = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("useEffect: Comp has been mounted or updated.")
        document.title = `Count: ${count}`
        return () => {
            console.log("Unmounting.")
        }
    }) 

  return (
    <>
    <div>FuncCounter: {count}</div>
    <button onClick={increment}>Increment</button>
    </>
    
  )
}

export default FuncCounter