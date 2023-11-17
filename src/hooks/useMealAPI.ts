import { useEffect, useState } from "react";
import { API_KEY } from "../constant";

export function useMealAPI() {
  const [recipes, setRecipes] = useState([])
  const [searchText, setSearchText] = useState<string>('pasta')
  const toFetch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchText}&number=9`
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [length] = useState(recipes.length)
  function updateSearchText(recipe: string) {
    setSearchText(recipe)
  }
  // const newRecipes = () => {
  //   fetch(toFetch)
  //     .then(res => res.json())
  //     .then(data => setRecipes(data))
  // }

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    fetch(toFetch)
      .then(res => {
        if (!res.ok) throw new Error('error to loading')
        return res.json()
      })
      .then(data => {
        setIsLoading(false)
        return setRecipes(data.results)
      })
      .catch(err => {
        setIsError(true)
        console.log(err);

      })
    console.log(recipes);

  }, [searchText])

  return { recipes, searchText, updateSearchText, isLoading, isError, length }
}