'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { GiBowman } from "react-icons/gi";
import { motion } from 'framer-motion';


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
        href: '/About',
        icon: '', // for mobile layout
    }
]


export default function NavBar() {

    const [currentPage, setCurrentPage] = useState('About me')

    const updateCurrentPage = (newPage) => setCurrentPage(newPage)

    return (
        <motion.header className='sm:flex justify-between justify-self-center content-center mt-2 p-2 px-5 bg-zinc-50/90 rounded-4xl shadow-xl w-1/2
        fixed left-1/4 top-0 hidden'
            initial={{ y: -100, x: "0%", opacity: 0 }}
            animate={{ y: 0, x: "0%", opacity: 1 }}
            transition={{duration: 0.2}}
        >

            <GiBowman size={30} />

            <nav>
                <ul className='flex mx-2'>
                    {
                        NAV_ITENS.map(item => {
                            return (
                                <motion.li key={item.label}

                                    className={`ml-4 p-2 rounded-lg hover:cursor-pointer hover:bg-lime-200 ${item.label === currentPage ? 'bg-lime-300' : ''}`}

                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link href={item.href}
                                        onClick={() => updateCurrentPage(item.label)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            )
                        })
                    }
                </ul>
            </nav>

        </motion.header>
    )
}
