import React from "react";
import './FilterButton.css';

function FilterButton(props) {
    return (
        <button className="filterButton">
            <img className="filterButton-Icon" src={props.icon} />
            <div className="filterButton-Title">{props.title}</div>
        </button>
        )
}

export default FilterButton;