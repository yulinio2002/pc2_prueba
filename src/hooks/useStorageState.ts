import { useState, useEffect } from 'react'

export function useStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    const value = window.localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState] as const
}
