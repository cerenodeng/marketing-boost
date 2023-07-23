'use client';

import { useState } from 'react';

export default function AdminList({ originalItems, refreshItems, deleteItem, add }) {
  const [items, setItems] = useState(originalItems);

  async function search(term) {
    const response = await refreshItems(term);
    setItems(response);
  }

  return (
    <div className="flex flex-col gap-y-5">
      {!add &&
        <>
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
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 4">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M2.49 2h.01m6 0h.01m5.99 0h.01" />
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
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                    </svg>
                  </button>
                </form>
              </div>
            ))}
          </div>
        </>
      }

      {add &&
        <>
          <div>Question One</div>
        </>
      }
    </div>
  )
}