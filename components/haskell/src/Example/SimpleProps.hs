{-# LANGUAGE RecursiveDo #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeApplications #-}
{-# OPTIONS_GHC -Wno-type-defaults #-}
module Example.SimpleProps where

import Prelude hiding ((!!))

import Language.Javascript.JSaddle hiding (Ref)
import Control.Monad.Reader
import Data.String
import Reflex.Dom.Core

import React
import Reflex.React

simplePropsHaskell :: ReaderT React JSM (Component JSVal ())
simplePropsHaskell = component $ do
  pure $ \props -> Render $ do
    propsJson <- lift $ fromJSString <$> valToJSON props
    pure $ fromString propsJson

simplePropsReflex :: ReaderT React JSM (Component JSVal ())
simplePropsReflex = reflexComponent "div" valToJSON $ \props -> do
  dynText $ fmap fromJSString props
