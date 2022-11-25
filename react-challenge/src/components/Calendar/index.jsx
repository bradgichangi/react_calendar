import React, { useState } from 'react'
import { monthCode, daysOfMonths } from '../../data'


const Calendar = () => {

    const [monthChoice, setMonthChoice] = useState('November')
    const [yearInput, setYearInput] = useState(2022)

    

    function startDay() {
        const lastTwoDigits = parseInt(yearInput.toString().slice(2)) 
        const start = ((1 + lastTwoDigits + (Math.floor(lastTwoDigits / 4)) + monthCode[monthChoice]) - 1) % 7
        return start - 2
    }

    

    function createCalendar() { 
        const days = []
        let row = []
        let contents = []
        let start = startDay() + 7

        for (let i = 0; i < daysOfMonths[monthChoice]; i++) {
            contents[start + i] = i + 1
        }


        for (let i = 0; i <= 42; i++) {
            if (i % 7 !== 0) {
                row.push(<th>{contents[i]}</th>)
            } else {
                days.push(<tr>{row}</tr>)
                row = []
                row.push(<th>{contents[i]}</th>)
            }
        }
        return days
    }

    function handleChange(e) {
        e.target.id == 'months'
            ? setMonthChoice(e.target.value)
            : setYearInput(e.target.value)

    }

    return (
        <>
            <form id='date-form'>
                <p>Enter Date</p>
                <select onChange={handleChange}  value={monthChoice} id="months" name="months">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <input id='year' onChange={handleChange}  value={yearInput} type="number" />
            </form>
            
            <div className='calendar'>
                <h3>{`${monthChoice}  ${yearInput}`}</h3>
                <table>
                    <tr className='days'>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>

                    {createCalendar().map(day => day)}

                </table>
            </div>
            
        </>    
    )

}

export default Calendar
