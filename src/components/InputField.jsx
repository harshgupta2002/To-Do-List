import React, { useState } from "react";


function InputField(props) {

    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        // console.log(inputText);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={() => {
                props.onSubmit(inputText);
                setInputText("");
            }}>
                <span>Add</span>

            </button>
            {/* <button onClick={handleClear}>
                <span>Clear</span>
            </button> */}
        </div>
    )
}

export default InputField;