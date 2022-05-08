import React from "react";
import Group from "./Group";

const Results = ({groups, searched}) => {

    if(!Object.keys(groups).length && searched) {
        return <div className="results___nothing-found container">Ups! Nada encontrado...</div>
    }

    return (
        <section className="results">
            <div className="results__container container">
               {Object.keys(groups).sort().map(group => <Group data={{groupName: group, countries: groups[group]}}/>)}
            </div>
        </section>
    )
}

export default Results;