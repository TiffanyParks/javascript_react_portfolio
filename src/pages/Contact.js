import React from 'react';
import { useState } from 'react';

function Contact () {

    // state for the input
    const [name, setName] = useState("");

    // state for the text under the input
    const [nameText, setNameText] = useState("")

    function changeHandler (event) {
    
        if(event.target.name == "name") {
            setName(event.target.value)
        }

        if(event.target.name == "email") {
            setName(event.target.value)
        }

        if(event.target.name == "message") {
            setName(event.target.value)
        }


    }

    function blurHandler (event) {
        if(event.target.name == "name") {
            if(event.target.value =="") {
                setNameText("Name cannot be empty")
            } else {
                setNameText("")
            }
        }

        if(event.target.name == "email") {
            if(event.target.value =="") {
                setNameText("Email cannot be empty")
            } else {
                setNameText("")
            }
        }

        if(event.target.name == "message") {
            if(event.target.value =="") {
                setNameText("Message cannot be empty")
            } else {
                setNameText("")
            }
        }


    }

    return (
        <form className="contact-form">
            <label>Name</label>
            <input type='text' name="name" onChange={changeHandler} onBlur={blurHandler}/>

            <p>{nameText}</p>

            <label>Email</label>
            <input type='text' name="email"  onChange={changeHandler} onBlur={blurHandler}/>

            <p>{nameText}</p>


            <label>Message</label>
            <textarea type='text' rows="5" name="message"  onChange={changeHandler} onBlur={blurHandler} />

            <p>{nameText}</p>


            <button className="submitBtn">Submit</button>
        </form>
    )
}

export default Contact;