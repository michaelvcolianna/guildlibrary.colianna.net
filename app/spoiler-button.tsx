'use client'

import { useEffect, useState } from 'react'

/**
 * Get the value from local storage and cast.
 *
 * @return boolean
 */
export function fromLocalStorage() {
  return JSON.parse(localStorage.getItem('showSpoilers') || 'false')
}

/**
 * Cast the value and set to local storage.
 *
 * @param  boolean  value
 * @return void
 */
export function toLocalStorage(value: boolean) {
  localStorage.setItem('showSpoilers', value.toString())
}

export function SpoilerButton() {
  // Variable/setter for the spoilers
  const [showSpoilers, setShowSpoilers] = useState(false)

  // Get the value from local storage on load
  useEffect(() => {
    setShowSpoilers(fromLocalStorage())
  }, [])

  /**
   * Handle a click for spoilers.
   *
   * @param  Event  event
   * @return Promise
   */
  function toggleSpoilers() {
    return new Promise<void>(resolve => {
      let value = !showSpoilers

      setShowSpoilers(value)

      toLocalStorage(value)

      resolve()
    })
  }

  // Form handler, which prevents default, runs the promise, then submits
  const submitForm = (event: React.FormEvent<HTMLFormElement> & {
    target: HTMLFormElement
  }) => {
    event.preventDefault()

    toggleSpoilers().then(() => {
      return event.target.submit()
    })
  }

  return (
    <form onSubmit={submitForm}>
      <button
        type="submit"
        className="bg-white text-black font-bold py-2 px-4 rounded"
      >
        {showSpoilers ? 'Hide' : 'Show'} spoilers
      </button>
    </form>
  )
}
