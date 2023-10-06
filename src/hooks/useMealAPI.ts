import { useEffect, useState } from "react";
import { URL_TO_FETCH } from "../constant";

export function useMealAPI() {
  const [recipes, setRecipes] = useState()

  const newRecipes = () => {
    fetch(URL_TO_FETCH)
      .then(res => res.json())
      .then(data => setRecipes(data))
  }

  useEffect(() => {
    fetch(URL_TO_FETCH)
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  return { recipes, newRecipes }
}