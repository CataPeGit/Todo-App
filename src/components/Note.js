import React from 'react'

const Note = ({ todo, setTodoNotes, allTodoNotes }) => {

    const deleteNoteHandler = () => {

        setTodoNotes(allTodoNotes.filter((el) => el.id !== todo.id));

    }

    const completeNoteHandler = () => {

        setTodoNotes(allTodoNotes.map((todo) => {
            if (todo.id === todo.id) {
                return {
                    ...todo, taskCompleted: !todo.taskCompleted  
                }
            }
            return todo;
        }))

    }

    return (
        <div className='todo'>

            <li className='todo-item'>{todo.text}</li>
            
            {

                todo.taskCompleted ? (
                    <p className='todo-item'>Completed</p> // Add UI checkmark icon or something
                ) : (
                    <p className='todo-item'>Not completed</p>
                )
            }

            

            <button onClick={completeNoteHandler} className="complete-btn" >
                <i className='fa fa-complete'></i>    
            </button> 

            <button onClick={deleteNoteHandler} className="trash-btn" >
                <i className='fa fa-trash'></i>    
            </button>      
        </div>
    )
}

export default Note;