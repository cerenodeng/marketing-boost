'use client';

import { useState } from 'react';

export default function LabelInput({ label, name, placeholder }) {
  const [emptyInput, setEmptyInput] = useState(true);

  return (
    <div className="flex flex-col gap-y-2">
      <label className={`label ${emptyInput ? 'invisible' : 'visible'}`} htmlFor={name}>{label}</label>
      <input
        className="input"
        name={name}
        placeholder={placeholder}
        onChange={(event) => event.target.value.length == 0 ? setEmptyInput(true) : setEmptyInput(false)}
      />
    </div>
  )
}