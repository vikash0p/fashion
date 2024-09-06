'use client'
import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import LoginForm from '../FormComponent/LoginForm';

const NewSeller = () => {
    const [isReady, setIsReady] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const closeComponent = () => {
        setIsOpen(false);
    };

    const openComponent = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(openComponent, 60 * 60 * 1000); // 1hr
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isReady) {
        return null;
    }

    return (
        <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: isOpen ? "0%" : "-100%" }}
            transition={{ type: "tween", duration: 1.1, ease: "easeIn" }}
            exit={{ y: "-100%" }}
            className={`flex flex-col items-center justify-center w-full min-h-screen bg-black/80 absolute top-0 left-0 right-0 bottom-0 z-50  overflow-hidden`}
            onClick={closeComponent}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "linear" }}
                className="relative flex flex-col h-96  m-auto items-center justify-center  mt-40 bg-white border-2 border-gray-200 shadow-2xl rounded-xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
            >
                <button
                    type="button"
                    className="absolute p-2 text-xl bg-gray-400 text-gray-900 transition-colors duration-300 rounded-full top-4 right-4 hover:text-gray-800 hover:bg-gray-300"
                    onClick={closeComponent}
                >
                    <IoCloseSharp />
                </button>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800 sr-only">Welcome, Seller!</h2>
                    <p className="text-center text-gray-600 sr-only">Login to access your seller dashboard and manage your listings.</p>
                    <LoginForm />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NewSeller;
