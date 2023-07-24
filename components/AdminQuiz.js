export default function AdminQuiz() {
  return (
    <div className="flex flex-col items-center">
      <div className="p-12">
        <div>
          <input id="single" name="type" type="radio" value="1" />
          <label htmlFor="single">Single Choice</label>
          <input id="multiple" name="type" type="radio" value="1" />
          <label htmlFor="multiple">Multiple Choice</label>
        </div>
        <button className="action">
          <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
          Add
        </button>
      </div>
    </div>
  )
}