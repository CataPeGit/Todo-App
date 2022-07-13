import React, { useState }  from 'react'
import Form from './Form';
import List from './List';

const Todo = () => {

    const [allTodoNotes, setTodoNotes] = useState([]);
    const [inputText, setInputText] = useState("");
    

    return (
        <div>
            <Form 
                inputText={inputText}
                allTodoNotes={allTodoNotes}
                setTodoNotes={setTodoNotes}
                setInputText={setInputText}
            >  
            </Form>

            <List allTodoNotes={allTodoNotes} setTodoNotes={setTodoNotes} ></List>

        </div>
    )
}

export default Todo;