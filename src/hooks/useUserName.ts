import { useEffect, useState } from 'react'

export function useUserName() {
  const [userName, setUserName] = useState(
    localStorage.getItem('username') ?? '',
  )

  const firstLetterName = userName.charAt(0).toUpperCase()

  useEffect(() => {
    localStorage.setItem('username', userName)
  }, [userName])

  return {
    userName,
    firstLetterName,
    setUserName,
  }
}
