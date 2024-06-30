"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
  const {user,isSignedIn}=useUser();
  const path=usePathname();
  useEffect(()=>{
    console.log(path)
  },[])
  return !path.includes('aiform')&&(
    <div className='p-3 px-4 border-b shadow-sm bg-white'>
    <div className='flex items-center justify-between'>
        <div className='flex items-center'>
            <Image src={'/logo.png'} width={45} height={25} alt='FormGenius logo' />
            <span className='ml-2 text-lg font-semibold text-gray-700'>FormGenius</span>
        </div>
        {isSignedIn ? (
            <div className='flex items-center gap-4'>
                <Link href={'/dashboard'}>
                    <Button variant="outline" className='text-sm'>Dashboard</Button>
                </Link>
                <UserButton />
            </div>
        ) : (
            <SignInButton>
                <Button className='text-sm'>Get Started</Button>
            </SignInButton>
        )}
    </div>
</div>


  )
}

export default Header