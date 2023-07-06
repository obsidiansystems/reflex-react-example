module Example.SimpleProps where

import Language.Javascript.JSaddle
import Control.Monad.Reader
import Data.String
import Reflex.Dom.Core

import React
import Reflex.React

simplePropsHaskell :: ReaderT React JSM (Component JSVal ())
simplePropsHaskell = component $ \props -> do
  propsJson <- liftJSM $ valToJSON props
  pure $ fromString $ fromJSString propsJson

simplePropsReflex :: ReaderT React JSM (Component JSVal ())
simplePropsReflex = reflexComponent "div" valToJSON $ \props -> do
  dynText $ fmap fromJSString props
