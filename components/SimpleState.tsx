'use client';

import { useState, useCallback } from 'react';

// @ts-ignore
import haskell from './haskell/haskell-components.cabal';

export function SimpleStateTypescript() {
  const [v, setV] = useState(0);
  const increment = useCallback(() => setV(v+1), [v]);
  return (
    <>
      <button onClick={increment}>+</button>
      {v.toString()}
    </>
  );
}

export const SimpleStateHaskell = haskell.simpleStateHaskell;

export const SimpleStateReflex = haskell.simpleStateReflex;
