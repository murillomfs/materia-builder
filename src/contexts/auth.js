import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import * as auth from '../services/auth';

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        function loadStoragedData() {
            const storagedUser = localStorage.getItem('@Auth:user');
            const storagedToken =  localStorage.getItem('@Auth:token');

            if(storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            } else {
                setLoading(false);
            }
        }

        loadStoragedData();
    }, []);

    async function signIn(){
        $('form input[type=submit]').val('loading...');
        const response = await auth.signIn();

        setUser(response.user);

        localStorage.setItem('@Auth:user', JSON.stringify(response.user));
        localStorage.setItem('@Auth:token', response.token);
    }

    async function signOut(){
        localStorage.clear();
        setUser(null);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;