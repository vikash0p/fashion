'use client'
import { useRouter } from 'next/navigation';
import React, { useReducer } from 'react';


const initialState = {
    name: '',
    email: '',
    password: '',
    errors: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'SET_ERROR':
            return { ...state, errors: { ...state.errors, [action.field]: action.message } };
        case 'CLEAR_ERRORS':
            return { ...state, errors: {} };
        default:
            return state;
    }
};

const RegisterForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const router = useRouter();

    const handleChange = (e) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };

    const validate = () => {
        dispatch({ type: 'CLEAR_ERRORS' });
        let isValid = true;

        if (!state.name) {
            dispatch({ type: 'SET_ERROR', field: 'name', message: 'Name is required' });
            isValid = false;
        }

        if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) {
            dispatch({ type: 'SET_ERROR', field: 'email', message: 'Email is invalid' });
            isValid = false;
        }

        if (!state.password || state.password.length < 6) {
            dispatch({ type: 'SET_ERROR', field: 'password', message: 'Password must be at least 6 characters long' });
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        router.push('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className='text-red-500 text-lg'>*</span></label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={state.name}
                            onChange={handleChange}
                            className="block w-full p-2 mt-1 border border-gray-300 shadow-sm rounded- focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {state.errors.name && <p className="mt-1 text-xs text-red-500">{state.errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className='text-red-500 text-lg'>*</span></label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={state.email}
                            onChange={handleChange}
                            className="block w-full p-2 mt-1 border border-gray-300 shadow-sm rounded- focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {state.errors.email && <p className="mt-1 text-xs text-red-500">{state.errors.email}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password <span className='text-red-500 text-lg'>*</span></label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={state.password}
                            onChange={handleChange}
                            className="block w-full p-2 mt-1 border border-gray-300 shadow-sm rounded- focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {state.errors.password && <p className="mt-1 text-xs text-red-500">{state.errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 px-4 border border-transparent rounded-sm  shadow-sm text-base font-medium text-white bg-violet-600 hover:bg-violet-700 `}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
