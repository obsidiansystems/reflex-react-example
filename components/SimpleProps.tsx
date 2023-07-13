'use client';

import haskell from './haskell/haskell-components.cabal';

export function SimplePropsTypescript(props) {
  return (
    <>
      {JSON.stringify(props)}
    </>
  );
}

export const SimplePropsHaskell = haskell.simplePropsHaskell;

export const SimplePropsReflex = haskell.simplePropsReflex;
