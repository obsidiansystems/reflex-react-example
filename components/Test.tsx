'use client';

import { useState } from 'react';
import { SimplePropsTypescript, SimplePropsHaskell, SimplePropsReflex } from './SimpleProps';
import { SimpleStateTypescript, SimpleStateHaskell, SimpleStateReflex } from './SimpleState';

export default function Test() {
  const [v, setV] = useState(0);
  return (
    <>
      <h1>Simple Props</h1>
      v: <input type="number" value={v.toString()} onChange={e => setV(Number(e.target.value))} />
      <h2>Typescript</h2>
      <div><SimplePropsTypescript v={v} /></div>
      <h2>Haskell</h2>
      <div><SimplePropsHaskell v={v} /></div>
      <h2>Reflex</h2>
      <div><SimplePropsReflex v={v} /></div>

      <h1>Simple State</h1>
      <h2>Typescript</h2>
      <div><SimpleStateTypescript v={v} /></div>
      <h2>Haskell</h2>
      <div><SimpleStateHaskell v={v} /></div>
      <h2>Reflex</h2>
      <div><SimpleStateReflex v={v} /></div>
    </>
  )
}
