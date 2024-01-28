'use client'

import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="border-b-2">
        <div className="py-3 mx-5">
          <Link href={'/'}>
            <h1>Chatalk</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
