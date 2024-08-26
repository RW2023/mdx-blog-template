'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import DarkToggle from './DarkToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeNavbar = () => {
        setIsOpen(false);
    };

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const buttonVariants = {
        open: {
            rotate: 180,
            scale: 1.2,
            transition: {
                duration: 0.6,
            },
        },
        closed: {
            rotate: 0,
            scale: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    const buttonControls = useAnimation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        buttonControls.start(isOpen ? 'closed' : 'open');
    };

    return (
        <motion.nav
            className="flex items-center justify-between flex-wrap p-3 navbar mt-0 sticky top-0 z-20 bg-primary text-black dark:bg-black dark:text-white shadow-2xl bg-opacity-90"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            initial="hidden"
            animate="show"
            variants={variants}
        >
            <div className="flex items-center flex-shrink-0 text-2xl mr-6">
                <Link href="/" onClick={closeNavbar}>
                    <span className="font-semibold text-xl tracking-tight cursor-pointer">
                        <div className="flex items-center">
                            {/* Logo Image */}
                            <Link href="/">
                                <Image
                                    src="https://via.placeholder.com/150" alt="Logo"
                                    width={60}
                                    height={60}
                                    className="m-1 rounded-lg"
                                />
                            </Link>
                            {/* Company Name */}
                            <span className="ml-2">company</span>
                        </div>
                    </span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <motion.button
                    type="button"
                    onClick={toggleNavbar}
                    className="text-4xl inline-flex items-center justify-center p-2 rounded-md hover:bg-button hover:text-buttonText focus:outline-none focus:ring-2 focus:ring-inset focus:ring-buttonText text-black dark:text-white"
                    animate={buttonControls}
                    variants={buttonVariants}
                    initial="closed"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </motion.button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}>
                <div className="text-sm lg:flex-grow">
                    <Link href="/blog" onClick={closeNavbar}>
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white text-xl hover:underline mr-4 cursor-pointer">
                            Blog
                        </span>
                    </Link>
                </div>
                <DarkToggle />
            </div>
        </motion.nav>
    );
};

export default Navbar;
