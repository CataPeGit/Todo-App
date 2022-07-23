import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import DatePicker from './DatePicker';

const Form = ({ inputText, allTodoNotes, setTodoNotes, setInputText, currentCategoryState, date, setDate, passed, setPassed}) => {

    const changeInputText = (inputElement) => {
        // handling the input text
        setInputText(inputElement.target.value);
    }

    const addNote = (inputElement) => {
        // adding a new note to the notes useState
        inputElement.preventDefault();

        const currentDate = new Date();
        currentDate.toLocaleDateString(); 

        setTodoNotes([{text: inputText, taskCompleted:false, id:Math.random()*10000 % 1000, noteCategory:currentCategoryState, noteDeadline:date, noteDeadlinePassed:passed}, ...allTodoNotes]);
        setInputText("");
    }

    return (

        <>
        <form className='MainForm'>
            
            <input className='textInput' placeholder='Create a new task!' value={inputText} onChange={changeInputText} type="text" name="name" /> 
            <button className="trash-btn" onClick={addNote} >Create task</button>
        </form> 

        <form className='MainForm'>
            <DatePicker passed={passed} date={date} setDate={setDate}></DatePicker> 
            <label className="deadline_label" disabled >Choose Deadline</label>
        </form> 

        </>

    )
}

export default Form;
