import React from "react";
import Button from "./Button";

const Filters = ({ groupedParameter, setGroupedParameter }) => {

    return (
        <section className="filters">
            <div className="filters__container container">
                <div className="filters__content">
                    <Button
                        value='continent'
                        active={groupedParameter === 'continent'}
                        setGroupedParameter={setGroupedParameter}
                    />
                    <Button
                        value='language'
                        active={groupedParameter === 'language'}
                        setGroupedParameter={setGroupedParameter}
                    />
                </div>
            </div>
        </section>
    )

}

export default Filters;