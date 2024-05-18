import React, { useState } from "react";


function ListItem(props) {
    const [value, setValue] = useState(false);

    function handleClick() {
        setValue(prevValue => {
            return !prevValue;
        })
    }
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