'use client';

import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminList from "./AdminList";

export default function AdminMain({ originalItems, refreshQuizzes, deleteQuiz }) {
  const [add, setAdd] = useState(false);

  return (
    <main className="flex flex-col gap-y-10 p-8 w-full">
      <AdminHeader title="Quizzes" onAdd={() => setAdd(true)} />
      <AdminList originalItems={originalItems} refreshItems={refreshQuizzes} deleteItem={deleteQuiz} showAdd={add} />
    </main>
  );
}