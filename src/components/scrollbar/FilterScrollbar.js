import React from 'react';
import FilterButton from '../buttons/FilterButton.js';
import ComedyFilterIcon from '../../images/ComedyFilterIcon.png';
import EducationFilterIcon from '../../images/EducationFilterIcon.png';
import HorrorFilterIcon from '../../images/HorrorFilterIcon.png';
import MusicFilterIcon from '../../images/MusicFilterIcon.png';
import SportFilterIcon from '../../images/SportFilterIcon.png';

import './FilterScrollbar.css';

function Divider() {
    return <div className="divider" />;
}

function FilterGrid(props) {
    return (
        <div className="filterGrid">
            <div className="filterGrid-Title"> {props.title} </div>
            {props.children}
        </div>
        )
}

function FilterScrollbar(props) {
    return (
        <div className="filterScrollbar">
            <div className="filterScrollbar-Scroll">
                <FilterGrid title="Category">
                    <FilterButton icon={ComedyFilterIcon} title="Comedy" />
                    <FilterButton icon={EducationFilterIcon} title="Education" />
                    <FilterButton icon={HorrorFilterIcon} title="Horror" />
                    <FilterButton icon={MusicFilterIcon} title="Music" />
                    <FilterButton icon={SportFilterIcon} title="Sport" />
                </FilterGrid>
                <Divider />
            </div>
        </div>
   );
};

export default FilterScrollbar;