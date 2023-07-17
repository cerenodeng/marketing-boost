'use client';

import { useState } from 'react';

export default function AdminList({ originalItems, refreshItems, deleteItem }) {
  const [items, setItems] = useState(originalItems);

  async function search(term) {
    const response = await refreshItems(term);
    setItems(response);
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-1/4">
        <input
          name="search"
          type="text"
          className="text-lg font-normal p-2 border border-indigo-700 focus:border-indigo-700/50 focus:outline-none"
          placeholder="Search..."
          onKeyUp={async (event) => { await search(event.target.value) }}
        />
      </div>

      <div className="flex flex-col divide-y">
        <div className="flex py-5">
          <div className="text-lg font-semibold w-1/4">Title</div>
          <div className="text-lg font-semibold w-1/4">Start</div>
          <div className="text-lg font-semibold w-1/4">End</div>
          <div className="w-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>

        {items.map((item) => (
          <div className="flex py-5 group hover:text-black/70" key={item.id}>
            <div className="w-1/4">{item.title}</div>
            <div className="w-1/4">{item.start_date} {item.start_time}</div>
            <div className="w-1/4">{item.end_date} {item.end_time}</div>

            <form className="w-1/4 invisible group-hover:visible">
              <button onClick={async () => deleteItem(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  )
}