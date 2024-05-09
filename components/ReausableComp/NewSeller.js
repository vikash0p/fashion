'use client'
import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const NewSeller = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeComponent = () => {
        setIsOpen(false);
    };

    const openComponent = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(openComponent, 60 * 60 * 1000); //1hr
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: isOpen ? "0%" : "-100%" }}
            transition={{ type: "tween", duration: 1.1, ease: "easeIn" }}
            exit={{ y: "-100%" }}
            className={`flex flex-col items-center justify-center w-full min-h-screen bg-black/80 absolute top-0 left-0 right-0 bottom-0 z-50  overflow-x-hidden`}
            onClick={closeComponent}

        >
            <motion.form
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "linear" }}
                className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
                action=""
            >
                <button type="button" className="ms-auto text-xl bg-gray-900 text-white p-2 rounded-full" onClick={closeComponent}><IoCloseSharp /></button>
                <label className="font-semibold text-xs" htmlFor="usernameField">Username or Email</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-violet-600 mt-8 rounded font-semibold text-sm text-violet-100 hover:bg-violet-700">Login</button>
                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-violet-400 hover:text-violet-500" href="#">Forgot Password</a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-violet-400 hover:text-violet-500" href="#">Sign Up</a>
                </div>
            </motion.form>
        </motion.div>
    );
};

export default NewSeller;
