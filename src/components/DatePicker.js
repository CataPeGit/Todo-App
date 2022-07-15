import React from "react";

const DatePicker = ({ date, setDate }) => {

    const changeDate = (inputElement) => {
        setDate(inputElement.target.value);
    }

    return(
        <>
        
        <div className="date-picker">
            <input type="date" onChange={ changeDate } ></input>
        </div>

        </>
    );
}

export default DatePicker;