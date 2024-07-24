
function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH!"

    return(
        <button onClick={(e) => handleClick(e)}>Click Me, bro 👌 </button>
    );
}

export default Button 