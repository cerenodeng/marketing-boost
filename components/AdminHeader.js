import Link from 'next/link';

export default function AdminHeader({ title }) {

  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>

      <div className="flex gap-x-5">
        <Link href="#" className="flex text-white bg-indigo-900 px-5 py-2.5 items-center border-2 border-transparent rounded hover:text-indigo-900 hover:bg-white hover:border-2 hover:border-indigo-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </Link>
      </div>
    </div >
  )
}