import React, { useState } from 'react'


const Categories = ({ 
    allCategories, setAllCategories, categoryInput, setCategoryInput,
    setCurrentCategoryState

    }) => {

    const changeCategoryInput = (categoryInput) => {
        setCategoryInput(categoryInput.target.value);
    }

    const changeCurrentCategoryState = (currentCategory) => {
        setCurrentCategoryState(currentCategory.target.value);
    }

    const addCategory = (inputElement) => {
        inputElement.preventDefault();
        setAllCategories([{category: categoryInput}, ...allCategories]);
        setCurrentCategoryState(categoryInput);
        setCategoryInput("");
    }


    return (
        <>
            <form className='MainForm'>

                <input className='textInput' placeholder='Create a new category!' value={categoryInput} onChange={changeCategoryInput} type="text" name="name" />
                <button className="trash-btn" onClick={addCategory} >Create category</button>        

                <div className='select'>
                <select onChange={changeCurrentCategoryState} className='filter-todo' name='todos' >

                    <option value="All Categories">All Notes</option>
                    {
                        allCategories.map((currentCategory) => (
                           <option value={currentCategory.category}>{currentCategory.category}</option>
                        ))
                    }
                </select>
            </div>

            </form>     

        </>

    )
}

export default Categories;