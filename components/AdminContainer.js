'use client';

import AdminList from "./AdminList";
import AdminQuiz from "./AdminQuiz";

export default function AdminContainer({ originalItems, refreshItems, deleteItem, add }) {
  return (
    <div className="flex flex-col gap-y-5">
      {!add && <AdminList originalItems={originalItems} refreshItems={refreshItems} deleteItem={deleteItem} />}
      {add && <AdminQuiz />}
    </div>
  )
}