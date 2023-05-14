import React from 'react';
import Project from '../components/Project';

import img1 from "../images/Prework Study Guide JPG.jpg";
import img2 from "../images/Horiseon JPG.jpg";
import img3 from "../images/animal-fan.png";
import img4 from "../images/generator.png";
import img5 from "../images/quiz.png";
import img6 from "../images/note_taker.png";

function Work() {
    const projectData = [
        {
            id: 1,
            link: "https://tiffanyparks.github.io/prework-study-guide/",
            img: img1,
            alt: "Prework Study Guide Screenshot",
           
        },
        {
            id: 2,
            link: "https://tiffanyparks.github.io/Activity-One-Repo/",
            img: img2,
            alt: "Prework Study Guide Screenshot",
        
        },
        {
            id: 3,
            link: "https://jsuttle2.github.io/P1-animal-fan-tool/",
            img: img3,
            alt: "Prework Study Guide Screenshot",
            
        },
        {
            id: 4,
            link: "https://tiffanyparks.github.io/password_generator/",
            img: img4,
            alt: "Prework Study Guide Screenshot",
          
        },
        {
            id: 5,
            link: "https://tiffanyparks.github.io/API-Code-Quiz/",
            img: img5,
            alt: "Prework Study Guide Screenshot",
        
        },
        {
            id: 6,
            link: "https://nameless-castle-26034.herokuapp.com/",
            img: img6,
            alt: "Prework Study Guide Screenshot",
       
        }
    ]

    return (
        <div className="work-container">
            {
                projectData.map(project => {
                    return <Project 
                    id={project.id}
                    link= {project.link}
                    img={project.img}
                    alt={project.alt}
                />
                })
            }

        </div>
    )
}

export default Work;