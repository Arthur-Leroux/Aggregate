import React from 'react';
import './App.css';
import UserProvider from './components/UserProvider/UserProvider';
import ArticlesProvider from './components/ArticlesProvider/ArticlesProvider';
import Router from './components/Router/Router';

const App = () => {
    return (
        <UserProvider>
            <ArticlesProvider>
                <Router/>
            </ArticlesProvider>
        </UserProvider>
    );
};

export default App;
