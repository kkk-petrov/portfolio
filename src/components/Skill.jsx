import React from "react";
import './Skill.css';

const Skill = ({items}) => {
    return(
        items.map((item) => (
            <li className="skills__item skill">
                <img src={item.icon} alt="html" className="skill__icon" />
                <p className="skill__title">{item.name}</p>
            </li>
        ))

        
    )
}

export default Skill;