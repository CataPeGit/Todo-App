import React from 'react'
import Note from './Note';

const List = ({ allTodoNotes, setTodoNotes }) => {



    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {
                    allTodoNotes.map((todo) => (
                        <Note setTodoNotes={setTodoNotes} allTodoNotes={allTodoNotes} todo={todo}></Note>)
                    )
                }
            </ul>
        </div>
    )
}

export default List;