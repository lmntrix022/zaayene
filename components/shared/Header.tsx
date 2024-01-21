import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b border-pink-600'>
        <div className='wrapper flex items-center justify-between'>
            <Link href="/" className='w-36'>
                <Image src="/assets/images/zaaa.svg" width={34} height={28} alt='Logo'/>
            </Link>

            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems />
                </nav>
            </SignedIn>
            <div className='flex w-32 justify-end gap-3'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className='rounded-full bg-blue-700 hover:bg-pink-600 btn' size='lg'>
                        <Link className='link' href='/sign-in'>
                            Se connecter
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header