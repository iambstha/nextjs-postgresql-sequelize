"use client"
import submitanswer from '@/db/op/submitAnswers'
import React, { useState, useEffect } from 'react'

const QuestionPage = () => {
  const [questions, setQuestions] = useState([])
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [selectedOptions, setSelectedOptions] = useState({}); // State to track selected options

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/questions")
        if (res.ok) {
          const data = await res.json()
          setQuestions(data)
        }
        else {
          console.log("Error fetching data. ")
        }
      } catch (error) {
        console.log("Error: " + error)
      }
    }
    fetchData()
  }, [])


const handleSubmit = (e) => {
  e.preventDefault()
  submitanswer(fname,lname,selectedOptions)
  setFname('')
  setLname('')
  setSelectedOptions({})
}

const handleOptionChange = (questionId, selectedOption) => {
  setSelectedOptions((prevState) => ({
    ...prevState,
    [questionId]: selectedOption,
  }));
};

  return (
    <div className=' w-full flex justify-center items-center '>
      <form className=' flex flex-col justify-left items-center w-3/4 m-4 p-4 ' onSubmit={handleSubmit}>
        <div className=' flex justify-start gap-4 w-full items-center '>
          <input type="text" className=' border p-2 px-4 outline-none ' placeholder='Enter your first name' name='fname' onChange={(e) => setFname(e.target.value)} />
          <input type="text" className=' border p-2 px-4 outline-none ' placeholder='Enter your last name' name='lname' onChange={(e) => setLname(e.target.value)} />
          <button type="submit" className=' border p-2 px-4 border-blue-500 bg-blue-500 rounded text-white '>Submit</button>
        </div>
        <ul className=' w-full '>
          {questions.map((question) => (
            <li key={question.id} className=' p-4 border rounded-lg shadow w-full mt-4 '>
              <p className=' text-lg text-slate-950 '>{question.ques}</p>
              <input
                type="radio"
                name={`for_${question.id}`}
                checked={selectedOptions[question.id] === 'a'}
                onChange={() => handleOptionChange(question.id, 'a')}
              />
              <label className=' pl-2 text-md text-slate-800 '> {question.op1} </label>
              <br />
              <input
                type="radio"
                name={`for_${question.id}`}
                checked={selectedOptions[question.id] === 'b'}
                onChange={() => handleOptionChange(question.id, 'b')}
              />
              <label className=' pl-2 text-md text-slate-800 '> {question.op2} </label>
              <br />
              <input
                type="radio"
                name={`for_${question.id}`}
                checked={selectedOptions[question.id] === 'c'}
                onChange={() => handleOptionChange(question.id, 'c')}
              />
              <label className=' pl-2 text-md text-slate-800 '> {question.op3} </label>
              <br />
            </li>
          ))}
        </ul>

      </form>
    </div>
  )
}

export default QuestionPage