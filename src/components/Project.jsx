import React from "react";
import StackItem from "./StackItem";


const Project = ({items}) => {
    return(
        items.map((item) => (
            

            <li className="content__item project">
                <img src={item.image} width="350px" height="180px" alt="project" className="project__image" />
                <div className="project__info">
                    <div className="project__text">
                        <h2 className="project__title">{item.title}</h2>
                        <ul className="project__stack stack">
                            <StackItem stack={item.stack}/>
                        </ul>
                            
                        <p className="project__about">
                            {item.about}
                        </p>
                    </div>

                        <div className="project__links">
                            <a href={item.goto} target="_blank" rel="noreferrer" className="project__link link__goto">Go to <span>{item.title}</span></a>
                            <a href={item.code} target="_blank" rel="noreferrer" className="project__link link__code">Code of <span>{item.title}</span></a>
                        </div>
                </div>

            </li>
        ))
    )
}

export default Project;