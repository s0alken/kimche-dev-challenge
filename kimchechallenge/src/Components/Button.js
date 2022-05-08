import React from "react";

const Button = ({ value, active, setGroupedParameter }) => {

    return (
        <button
            className={active ? 'filters__button button_active' : 'filters__button'}
            onClick={() => setGroupedParameter(value)}
        >
            {`Group by ${value}`}
        </button>
    )

}

export default Button;