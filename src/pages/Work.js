import React from 'react';
import Project from '../components/Project';

import img1 from "../images/Prework Study Guide JPG.jpg"
import img2 from "../images/Horiseon JPG.jpg"

function Work() {
    const projectData = [
        {
            id: 1,
            link: "https://tiffanyparks.github.io/prework-study-guide/",
            img: img1,
            alt: "Prework Study Guide Screenshot"
        },
        {
            id: 1,
            link: "https://tiffanyparks.github.io/prework-study-guide/",
            img: img1,
            alt: "Prework Study Guide Screenshot"
        },
        {
            id: 1,
            link: "https://tiffanyparks.github.io/prework-study-guide/",
            img: img1,
            alt: "Prework Study Guide Screenshot"
        },
        {
            id: 1,
            link: "https://tiffanyparks.github.io/prework-study-guide/",
            img: img1,
            alt: "Prework Study Guide Screenshot"
        },
        {
            id: 1,
            link: "https://tiffanyparks.github.io/prework-study-guide/",
            img: img1,
            alt: "Prework Study Guide Screenshot"
        },
        {
            id: 1,
            link: "https://tiffanyparks.github.io/prework-study-guide/",
            img: img1,
            alt: "Prework Study Guide Screenshot"
        }
    ]

    return (
        <div class="work-container">
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


            {/* <a href="https://tiffanyparks.github.io/prework-study-guide/" target="_blank" id="challenge-1" class="items">
                <img class="image-container" src={img1}
                    alt="Prework Study Guide Screenshot" height="200" width="200" />
            </a>
            <a href="https://tiffanyparks.github.io/Activity-One-Repo/" target="_blank" id="challenge-2" class="items">
                <img class="image-container" src={img2} alt="Horiseon Screenshot" height="200" width="200" />
            </a>
            <a href="https://sleepy-springs-52345.herokuapp.com/" target="_blank" id="challenge-3" class="items">
                <img class="image-container"
                    src="https://user-images.githubusercontent.com/48537443/233453531-36e0b7df-7933-4269-a721-180e2db9254c.png"
                    alt="red and white screen shoot of a pizza app" height="200" width="200" />
            </a>
            <a href="https://jsuttle2.github.io/P1-animal-fan-tool/" target="_blank" id="project-1" class="items">
                <img
                class="image-container"
                src="https://github.com/Jsuttle2/P1-animal-fan-tool/raw/main/Assets/IMGS/P1-animal%20fan%20tool%20SS.jpg"
                height="200" width="200" alt=" teal colorful page with animals, links, and dropdown boxes" /></a>
            <a href="https://tiffanyparks.github.io/API-Code-Quiz/" target="_blank" id="project-1" class="items"><img
                class="image-container"
                src="https://user-images.githubusercontent.com/126128634/234764769-c40404b3-b4d8-4eb6-89d9-a4ecc2b0516a.png"
                height="200" width="200" alt="black and green picture of the layout of a gaming image with start and stop buttons" /></a>
            <a href="https://tiffanyparks.github.io/password_generator/" target="_blank" id="project-1" class="items"><img
                class="image-container"
                src="https://user-images.githubusercontent.com/126128634/235008064-5d5c80c4-057d-444d-8d97-037e631abb30.png"
                height="200" width="200" alt="white and red text box with a red generate password button with an example of a password in its display window" /></a> */}
        </div>
    )
}

export default Work;