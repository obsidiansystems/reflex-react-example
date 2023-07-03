'use client';

import { useProps } from 'react';
import { ImportHaskellComponent } from './Haskell';

import { default as haskell } from './haskell/haskell-components.cabal';

export function SimplePropsTypescript(props) {
  return (
    <>
      {JSON.stringify(props)}
    </>
  );
}

export const SimplePropsHaskell = haskell.simplePropsHaskell;

export const SimplePropsReflex = haskell.simplePropsReflex;
