import React, { useReducer, useState }  from 'react'
import Categories from './Categories';
import Form from './Form';
import List from './List';

const Todo = () => {

    // Note useState hooks
    const [allTodoNotes, setTodoNotes] = useState([]);
    const [inputText, setInputText] = useState("");
    const [currentNotesByCategory, setCurrentNotesByCategory] = useState([]);
    const [date, setDate] = useState("")
    const [passed, setPassed] = useState(false);

    // Categories useState hooks
    const [allCategories, setAllCategories] = useState([]);
    const [categoryInput, setCategoryInput] = useState("");
    const [currentCategoryState, setCurrentCategoryState] = useState("All categories");
    

    return (

        <div>
            <header>
                <h1>Todo App</h1>
            </header>
            <Form 
                passed={passed}
                setPassed={setPassed}
                date={date}
                setDate={setDate}
                currentCategoryState={currentCategoryState}
                inputText={inputText} 
                allTodoNotes={allTodoNotes}
                setTodoNotes={setTodoNotes}
                setInputText={setInputText}
            >  
            </Form>

            <Categories 
                allCategories={allCategories}
                categoryInput={categoryInput} 
                setAllCategories={setAllCategories}  
                setCategoryInput={setCategoryInput}
                setCurrentCategoryState={setCurrentCategoryState}

                allTodoNotes = {allTodoNotes}
                currentNotesByCategory={currentNotesByCategory}
                setCurrentNotesByCategory={setCurrentNotesByCategory}
            >
            </Categories>

            <List 
                currentCategoryState={currentCategoryState}
                allTodoNotes={allTodoNotes} 
                setTodoNotes={setTodoNotes} 
                date={date}
                setPassed={setPassed}
            >
            </List>

        </div>
    )
}

export default Todo;
