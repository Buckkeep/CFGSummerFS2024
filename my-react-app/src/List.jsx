
function List() {

    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    // fruits.sort();

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(
        <ul>{listItems}</ul>
    );

}

export default List