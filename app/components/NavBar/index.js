'use client'

import Link from 'next/link'
import React, { useState } from 'react'



const NAV_ITENS = [
    {
        label: "Feed",
        description: "Feed for blog",
        href: '/Feed',
        icon: '', // for mobile layout
    },
    {
        label: "Portfolio",
        description: "Portfolio for projects",
        href: '/Portfolio',
        icon: '', // for mobile layout
    },
    {
        label: "About me",
        description: "About me",
        href: '/about',
        icon: '', // for mobile layout
    }
]


export default function NavBar() {

    const [currentPage, setCurrentPage] = useState('About me')

    const updateCurrentPage = (newPage) => setCurrentPage(newPage)

    return (
        <header className='flex mt-1 p-2 justify-between'>
            <div className='text-lg'>Gabriel Coutinho.dev</div>

            <nav>
                <ul className='flex mx-2'>
                    {
                        NAV_ITENS.map(item => {
                            return (
                                <li key={item.label} 
                                
                                className={`ml-4 p-1 hover:cursor-pointer ${item.label === currentPage ? 'underline decoration-2' : ''}`}>
                                    <Link href={item.href}
                                    onClick={() => updateCurrentPage(item.label)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}
