'use client';

import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminContainer from "./AdminContainer";

export default function AdminMain({ title, originalItems, refreshItems, deleteItem, saveItem }) {
  const [add, setAdd] = useState(false);

  return (
    <main className="flex flex-col gap-y-10 p-8 w-full">
      <AdminHeader title={title} add={add} saveItem={saveItem} onAdd={() => setAdd(!add)} />
      <AdminContainer originalItems={originalItems} refreshItems={refreshItems} deleteItem={deleteItem} add={add} />
    </main>
  );
}