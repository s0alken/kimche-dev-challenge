import React from "react";
import Button from "./Button";

const Filters = ({ selectedGroupOption, setSelectedGroupOption }) => {

    return (
        <section className="filters">
            <div className="filters__container container">
                <div className="filters__content">
                    <Button
                        value='continent'
                        active={selectedGroupOption === 'continent'}
                        setGroupedParameter={setSelectedGroupOption}
                    />
                    <Button
                        value='language'
                        active={selectedGroupOption === 'language'}
                        setGroupedParameter={setSelectedGroupOption}
                    />
                </div>
            </div>
        </section>
    )

}

export default Filters;