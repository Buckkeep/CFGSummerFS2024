import propTypes from 'prop-types';

function List(props) {

    const category = props.category;

    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.calories}</b></li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );

}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape( {id: propTypes.number, 
                                                name: propTypes.string,
                                                calories: propTypes.number}
                                             ))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List