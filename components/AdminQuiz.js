'use client';

import { Fragment, useState } from 'react';
import LabelInput from './LabelInput';

export default function AdminQuiz() {
  const [type, setType] = useState('single');
  const [choices, setChoices] = useState([{ id: 0, content: <ChoiceRow /> }]);

  function ChoiceRow() {
    return (
      <>
        <div>
          <input className="input w-full" />
        </div>
        <div>
          <input className="input w-full" />
        </div>
      </>
    );
  }

  function handleType(event) {
    setType(event.target.value);
  }

  return (
    <div className="flex gap-x-10">
      <div className="flex flex-col gap-y-4 w-1/3">
        <div className="flex flex-col gap-y-4 bg-gray-100 p-2.5 rounded">
          <div className="flex flex-col">
            <LabelInput label="Question" name="question" placeholder="Question" />
          </div>

          <div className="grid grid-cols-2 gap-1">
            <div>Choice</div>
            <div>Score</div>
            {choices.map((choice) => (
              <Fragment key={choice.id}>
                {choice.content}
              </Fragment>
            ))}
          </div>

          <button className="flex w-full justify-center" type="button">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
            </svg>
          </button>

          <div className="flex gap-x-5">
            <div className="flex gap-x-1 items-center">
              <input id="single" className="w-5 h-5" name="type" type="radio" value="single" checked={type == 'single'} onChange={handleType} />
              <label htmlFor="single">Single Choice</label>
            </div>
            <div className="flex gap-x-1 items-center">
              <input id="multiple" className="w-5 h-5" name="type" type="radio" value="multiple" checked={type == 'multiple'} onChange={handleType} />
              <label htmlFor="multiple">Multiple Choice</label>
            </div>
          </div>
        </div>

        <button className="action" type="button">
          <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
          Add another question
        </button>
      </div>

      <div className="flex flex-col gap-y-5 w-2/3">
        Preview
      </div>
    </div>
  )
}