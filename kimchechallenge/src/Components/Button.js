import React from "react";

const Button = ({ value, active, setSelectedGroupOption }) => {

    return (
        <button
            className={active ? 'filters__button button_active' : 'filters__button'}
            onClick={() => setSelectedGroupOption(value)}
        >
            {`Group by ${value}`}
        </button>
    )

}

export default Button;