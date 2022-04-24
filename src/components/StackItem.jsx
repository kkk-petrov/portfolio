import React from "react";

const StackItem = ({stack}) => (
    stack.map((tech) => (
        <li className="stack__item">
            {tech}
        </li>
    ))
    
)

export default StackItem;