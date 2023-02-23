import React from 'react'

export default function Navigation() {
  return (
    <nav>
      <ul className='md:flex [&>*]:mx-2'>
        <li>Home</li>
        <li>About</li>
        <li>Tools</li>
        <li>User</li>
      </ul>
    </nav>
  )
}
