import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Form = ({ inputText, allTodoNotes, setTodoNotes, setInputText, currentCategoryState}) => {

    const changeInputText = (inputElement) => {
        // handling the input text
        // if (!inputElement.text || /^\s*$/.test(inputElement.text)){
        //     return;
        // }

        setInputText(inputElement.target.value);
    }

    const addNote = (inputElement) => {
        // adding a new note to the notes useState
        inputElement.preventDefault();
        // if (!inputElement.text || /^\s*$/.test(inputElement.text)){
        //     return;
        // }

        console.log(currentCategoryState);

        setTodoNotes([{text: inputText, taskCompleted:false, id:Math.random()*10000 % 1000, noteCategory:currentCategoryState}, ...allTodoNotes]);
        setInputText("");
    }


    return (

        <>
        <form className='MainForm'>
            
            <input placeholder='Create a new task!' value={inputText} onChange={changeInputText} type="text" name="name" />
            <button className="trash-btn" onClick={addNote} >create task</button>                    
            
        </form>       
        </>

    )
}

export default Form;
