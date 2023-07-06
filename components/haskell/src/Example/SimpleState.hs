module Example.SimpleState where

import Language.Javascript.JSaddle hiding (Ref)
import Control.Monad.Reader
import Data.String
import Reflex.Dom.Core

import React
import Reflex.React

simpleStateHaskell :: ReaderT React JSM (Component JSVal ())
simpleStateHaskell = component $ \_ -> do
  (v, setV) <- useState (0 :: Int)
  increment <- useCallback (\_ _ _ -> setV (v + 1)) (Just [toJSVal v])
  pure $ createFragment
    [ createElement "button" ("onClick" =: increment) ["+"]
    , fromString $ show v
    ]

simpleStateReflex :: ReaderT React JSM (Component JSVal ())
simpleStateReflex = reflexComponent "div" valToJSON $ \_ -> do
  clicked <- button "+"
  numClicks <- count clicked
  display numClicks
