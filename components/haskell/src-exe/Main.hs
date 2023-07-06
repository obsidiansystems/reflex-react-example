{-# LANGUAGE TemplateHaskell #-}
import React.Export

import Example.SimpleProps
import Example.SimpleState

mainExportsToJS
  [ 'simplePropsHaskell
  , 'simplePropsReflex
  , 'simpleStateHaskell
  , 'simpleStateReflex
  ]
