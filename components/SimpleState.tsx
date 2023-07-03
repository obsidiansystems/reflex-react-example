'use client';

import { useState } from 'react';
import { ImportHaskellComponent } from './Haskell';

import { default as haskell } from './haskell/haskell-components.cabal';

export function SimpleStateTypescript() {
  const [v, setV] = useState(0);
  return (
    <>
      <button onClick={() => setV(v+1)} >+</button>
      {v.toString()}
    </>
  );
}

export const SimpleStateHaskell = haskell.simpleStateHaskell;

export const SimpleStateReflex = haskell.simpleStateReflex;
