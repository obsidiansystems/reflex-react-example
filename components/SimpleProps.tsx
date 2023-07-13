'use client';

// @ts-ignore
import haskell from './haskell/haskell-components.cabal';

interface IProps {
    v: number;
};

export function SimplePropsTypescript(props: IProps) {
  return (
    <>
      {JSON.stringify(props)}
    </>
  );
}

export const SimplePropsHaskell = haskell.simplePropsHaskell;

export const SimplePropsReflex = haskell.simplePropsReflex;
