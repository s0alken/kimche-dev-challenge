import React from "react";
import Card from "./Card";

const Group = ({data}) => {

    return (
        <div className="results__group">
            <span className="results__group-title">{data.groupName}</span>
            <div className="results__group-card grid">
                {data.countries.map(country => <Card country={country} /> )}
            </div>
        </div>
    )
}

export default Group;