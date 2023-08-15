import { useState } from 'react';

export default function AdminQuiz() {
  const [type, setType] = useState('single');

  function handleType(event) {
    setType(event.target.value);
  }

  return (
    <div className="flex gap-x-10">
      <div className="flex flex-col gap-y-5 w-1/3">
        <div className="bg-gray-100 p-2.5 rounded">
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

          {type == 'single' &&
            <div className="">
              Questions for single
            </div>
          }

          {type == 'multiple' &&
            <div className="">
              Questions for multiple
            </div>
          }
        </div>

        <button className="action">
          <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
          Add
        </button>
      </div>

      <div className="flex flex-col gap-y-5 w-2/3">
        Preview
      </div>
    </div>
  )
}