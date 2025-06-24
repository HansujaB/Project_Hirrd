import React from 'react'
import { Button } from './ui/button';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav className='py-4 flex justify-between items-center px-4'>
        <Link>
        <img src="./logo.png" className='h-10'/>
        </Link>

        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </nav>
    </>
  )
}

export default Header
