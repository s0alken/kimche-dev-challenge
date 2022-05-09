import React from "react";
import Card from "./Card";

const Group = ({ data }) => {

    return (
        <div className="results__group">
            <div className="results__group-title">{data.groupName}</div>
            <div className="results__group-card grid">
                {data.countries.map(country => <Card key={country.code} country={country} />)}
            </div>
        </div>
    )
}

export default Group;