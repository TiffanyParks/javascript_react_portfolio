import React from 'react';

function Project(props) {
    return (
        <div className="project-container">

            <a href={props.link} target="_blank" id={props.id} className="items">
                <img className="image-container" src={props.img} alt={props.alt} height="150" width="150"/>
                <h2>{props.h2}</h2>
            </a>

        </div>
    )
}

export default Project;