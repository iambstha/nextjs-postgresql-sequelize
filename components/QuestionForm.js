"use client"
import React, { useState } from 'react';
import createQuestion from '@/db/op/createQuestion';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createQuestion(question, option1, option2, option3, correctAnswer);

      // Clear the form fields after successful submission
      setQuestion('');
      setOption1('');
      setOption2('');
      setOption3('');
      setCorrectAnswer('');
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center '>
      <div className='p-4 flex w-full justify-center items-center '>
        <label className=' w-1/5 pr-4 '>Question:</label>
        <input className=' outline-none border w-4/5 p-2 px-4 ' type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div className='p-4 flex w-full justify-center items-center '>
        <label className=' w-1/5 pr-4 '>Option 1:</label>
        <input className=' outline-none border w-4/5 p-2 px-4 ' type="text" value={option1} onChange={(e) => setOption1(e.target.value)} />
      </div>
      <div className='p-4 flex w-full justify-center items-center '>
        <label className=' w-1/5 pr-4 '>Option 2:</label>
        <input className=' outline-none border w-4/5 p-2 px-4 ' type="text" value={option2} onChange={(e) => setOption2(e.target.value)} />
      </div>
      <div className='p-4 flex w-full justify-center items-center '>
        <label className=' w-1/5 pr-4 '>Option 3:</label>
        <input className=' outline-none border w-4/5 p-2 px-4 ' type="text" value={option3} onChange={(e) => setOption3(e.target.value)} />
      </div>
      <div className='p-4 flex w-full justify-center items-center '>
        <label className=' w-1/5 pr-4 '>Correct Answer:</label>
        <input className=' outline-none border w-4/5 p-2 px-4 ' type="text" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
      </div>
      <button type="submit" className=' border border-blue-500 bg-blue-500 p-2 px-4 text-white rounded-md '>Add Question</button>
    </form>
  );
};

export default QuestionForm;
