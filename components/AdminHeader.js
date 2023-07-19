export default function AdminHeader({ title, onAdd }) {
  return (
    <div className="flex gap-x-5 items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <button className="flex text-white bg-indigo-900 p-2.5 border-2 border-transparent rounded hover:text-indigo-900 hover:bg-white hover:border-2 hover:border-indigo-900" onClick={onAdd}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </button>
    </div >
  )
}