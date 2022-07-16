import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import DatePicker from './DatePicker';

const Form = ({ inputText, allTodoNotes, setTodoNotes, setInputText, currentCategoryState, date, setDate, passed, setPassed}) => {

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
        //if (!inputElement.text || /^\s*$/.test(inputElement.text)){
        // if (!inputElement.text || /^\s*$/.test(inputElement.text)){
        //     return;
        // }

        const currentDate = new Date();
        currentDate.toLocaleDateString(); 

        setTodoNotes([{text: inputText, taskCompleted:false, id:Math.random()*10000 % 1000, noteCategory:currentCategoryState, noteDeadline:date, noteDeadlinePassed:passed}, ...allTodoNotes]);
        setInputText("");
    }

    /*
    const deadlineHandler = (inputElement)=> {
        const currentDate = new Date();

        currentDate.toLocaleDateString(); 
        console.log(currentDate);
        console.log(currentDate.getDate());
        console.log(currentDate.getMonth() + 1);
        console.log(currentDate.getFullYear());
        console.log(date);
        console.log("COX");
        console.log( (currentDate.getMonth() + 1).toString());
        console.log((date.substring(5, 7) === (currentDate.getMonth() + 1).toString()));
        console.log(passed);

        if (date.substring(0, date.indexOf('-')) < currentDate.getFullYear().toString()) {
            setPassed(true);
        } else if ((date.substring(5, 7) < (currentDate.getMonth() + 1)) && (date.substring(0, date.indexOf('-')) === currentDate.getFullYear().toString())) {
            setPassed(true);
        } else if ((date.substring(8, 10) < (currentDate.getMonth() + 1)) && (date.substring(5, 7) === (currentDate.getMonth() + 1)) && (date.substring(0, date.indexOf('-')) === currentDate.getFullYear().toString())) {
            setPassed(true);
        } else {
            setPassed(false);
        }
    } */

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
