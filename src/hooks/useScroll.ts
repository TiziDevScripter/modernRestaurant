import { useEffect, useState } from 'react'

export function useScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      // console.log(scrollY);
    }
    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollY }
}