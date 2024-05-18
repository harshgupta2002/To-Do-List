function ListItem(props) {
    var value= false;

    return (
        <div className="list-container"
            onClick={() => {
                props.handleChecked(props.id)
            }}
            style={value ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
            <li>{props.item}</li>
        </div>
    )

}
export default ListItem;