module Main where

import Test.Framework.Runners.Console
import Test.Framework.Providers.QuickCheck2

import DBoolTest

main :: IO ()
main = defaultMainWithOpts [
  testProperty "reflexivity" testReflexivity
  ] mempty
