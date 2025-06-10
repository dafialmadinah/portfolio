"use client";

import React, { useEffect, useState } from 'react'
import DecryptedText from '../reactBits/DecryptedText/DecryptedText';
import GooeyNav from '../reactBits/GooeyNav/GooeyNav'
import Link from 'next/link';
import { LiaHamburgerSolid } from "react-icons/lia";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
];
export const Header = () => {
    const [type, setType] = useState("view");

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setType("hover")
        }, 300)

        return () => clearTimeout(timeOut)
    }, [])


    const [open, setOpen] = useState(false)
    const clickBurger = () => {
        setOpen(!open)
    }
    useEffect(() => {
        const sideNav = document.getElementById('navSide');
        if (open) {
            sideNav?.classList.replace('right-[-1000px]', 'right-0');
        } else {
            sideNav?.classList.replace('right-0', 'right-[-1000px]');
        }
    }, [open])


    return (
        <header className='w-full py-5 px-15 fixed top-0 z-20'>
            <div className='flex flex-col absolute top-0 right-[-1000px] w-1/2 transition-all z-100 mt-20 lg:hidden bg-white/40 h-screen rounded-lg' id='navSide'>
                {items.map(item => (
                    <Link key={item.label} href={item.href}>
                        <div className="p-4  text-white ">
                            {item.label}
                        </div>
                    </Link>
                ))}
            </div>
            <nav className='relative flex items-center justify-between '>

                <DecryptedText parentClassName='cursor-pointer z-10 text-[20px] font-[Consolas]'
                    text="console.log(dafialmadinah);"
                    animateOn={type}
                />

                <LiaHamburgerSolid
                    size={60}
                    className='lg:hidden'
                    onClick={clickBurger}
                />

                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    classTambahan='absolute hidden lg:flex'
                />

                <div className="hidden lg:flex gap-4">
                    <a href="https://github.com/dafialmadinah" target="_blank" rel="noopener noreferrer">
                        <FaSquareGithub className="text-5xl hover:text-gray-700" />
                    </a>
                    <a href="https://linkedin.com/in/dafialmadinah" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-5xl hover:text-blue-700" />
                    </a>
                    <a href="https://instagram.com/dafialmadinah" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare className="text-5xl hover:text-pink-500" />
                    </a>
                </div>

            </nav>
        </header>
    )
}
