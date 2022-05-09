import React from "react";
import Group from "./Group";

const Results = ({ groups, searched }) => {

    if (!Object.keys(groups).length && searched) {
        return <div className="results__nothing-found container">Oops! Nothing found...</div>
    }

    return (
        <section className="results">
            <div className="results__container container">
                {Object.keys(groups).sort().map(group => <Group key={group} data={{ groupName: group, countries: groups[group] }} />)}
            </div>
        </section>
    )
}

export default Results;