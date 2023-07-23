export default function AdminHeader({ title, add, saveItem, onAdd }) {
  return (
    <div className="flex gap-x-5 items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      {!add &&
        <button className="action" onClick={onAdd}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </button>
      }

      {add &&
        <button className="action" onClick={onAdd}>
          <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
          </svg>
          Save
        </button>
      }
    </div >
  )
}