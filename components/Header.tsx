import { Agent } from 'http'
import Link from 'next/link'
import React from 'react'
import AgentPulse from './AgentPulse'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Header = () => {
    return (
        <header
            className="sticky top-0 left-0 right-0 px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Left */}
                    <div>
                        <Link href="/" className="flex items-center gap-4">
                            {/* AgentPulse */}
                            <AgentPulse size="small" color="blue" />
                            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Agent</h1>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <SignedIn>
                            <Link href="/manage-plan" className="flex items-center gap-4">
                                <Button
                                    variant="outline"
                                    className="mr-4"
                                >Manage Plan</Button>
                            </Link>
                            <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border  bg-blue-100 border-blue-200">
                                <UserButton />
                            </div>
                        </SignedIn>

                        <SignedOut>
                            <SignInButton mode='modal'>
                                <Button
                                    variant='ghost'
                                    className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                    </div >
                </div>
                Header</header>
        
  )
}

export default Header