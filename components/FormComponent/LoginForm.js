'use client'
import { useRouter } from 'next/navigation';
import React, { useReducer } from 'react';

const initialState = {
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

const LoginForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const router = useRouter();

    const handleChange = (e) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };

    const validate = () => {
        dispatch({ type: 'CLEAR_ERRORS' });
        let isValid = true;

        if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) {
            dispatch({ type: 'SET_ERROR', field: 'email', message: 'Email is invalid' });
            isValid = false;
        }

        if (!state.password) {
            dispatch({ type: 'SET_ERROR', field: 'password', message: 'Password is required' });
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        // Simulate successful login and redirect
        router.push('/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 ">
            <div className="w-full max-w-md p-8 bg-secondary rounded-lg shadow-2xl">
                <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium ">Email <span className='text-red-500 text-lg'>*</span></label>
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
                        <label htmlFor="password" className="block text-sm font-medium ">Password <span className='text-red-500 text-lg'>*</span></label>
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
                        className="w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-sm shadow-sm bg-primary hover:bg-violet-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
