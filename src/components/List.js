import React from 'react'
import Note from './Note';

const List = ({ allTodoNotes, setTodoNotes, currentCategoryState, date, setPassed }) => {

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {
                    allTodoNotes.map((todo) => (
                        <Note setPassed={setPassed} date={date} currentCategoryState={currentCategoryState} setTodoNotes={setTodoNotes} allTodoNotes={allTodoNotes} todo={todo}></Note>
                        
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default List;