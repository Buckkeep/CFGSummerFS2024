import React, {useState} from "react"

function MyComponent() {

    let [name, setName] = useState();

    const updateName = () => {
        // name = "Buckkeep";
        // console.log(name)
        setName("Buckkeep")
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    );

}

export default MyComponent