import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, The page you are looking for does not exist in AI Pilot Website</p>
      <Link href="/">Return Home?</Link>
    </div>
  )
}

export default NotFound
