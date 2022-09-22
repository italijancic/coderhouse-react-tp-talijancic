import React from 'react'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <div>
        <nav>
            <ul>
              <li>Curso UX/UI</li>
              <li>Curso React</li>
              <li>Curso JS</li>
            </ul>
        </nav>
        <CartWidget />
    </div>
  )
}
