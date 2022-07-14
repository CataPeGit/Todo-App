import React from 'react'

const Note = ({ todo, setTodoNotes, allTodoNotes, currentCategoryState }) => {

    const deleteNoteHandler = () => {

        setTodoNotes(allTodoNotes.filter((el) => el.id !== todo.id));

    }

    const completeNoteHandler = () => {

        setTodoNotes(allTodoNotes.map(noteInLoop => {
            if (noteInLoop.id === todo.id) {
                return {
                    ...noteInLoop, taskCompleted: !noteInLoop.taskCompleted  
                }
            }
            return noteInLoop;
        }))

    }

    return (

        <>
            {
                // if category = custom category then display notes for that custom category
                currentCategoryState === todo.noteCategory ?(
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
                ) : (
                    // if category = "All Categories" then  display all notes
                    <>
                        {
                            currentCategoryState === "All Categories" ? (
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
                            ) : (
                                <> </>
                            )
                        }
                    </>
                )

            }
        </>
    )
}

export default Note;
