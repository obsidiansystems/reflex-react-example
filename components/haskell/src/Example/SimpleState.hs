{-# LANGUAGE RecursiveDo #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# OPTIONS_GHC -Wno-type-defaults #-}
module Example.SimpleState where

import Prelude hiding ((!!))

import Language.Javascript.JSaddle hiding (Ref)
import Control.Monad.Reader
import Data.String
import Reflex.Dom.Core

import React
import Reflex.React

simpleStateHaskell :: ReaderT React JSM (Component JSVal ())
simpleStateHaskell = component $ do
  (v, setV) <- useState (0 :: Int)
  onButton <- useCallback (\_ _ _ -> setV $ v + 1) (Just [toJSVal v])
  pure $ \_ -> Render $ do
    pure $ createFragment
      [ createElement "button" ("onClick" =: onButton) ["+"]
      , fromString $ show v
      ]

simpleStateReflex :: ReaderT React JSM (Component JSVal ())
simpleStateReflex = reflexComponent "div" valToJSON $ \_ -> do
  clicked <- button "+"
  numClicks <- count clicked
  display numClicks
