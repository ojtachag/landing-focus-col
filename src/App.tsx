import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense } from 'react';
import Layout from './components/Layout/Layout.tsx';
import Home from './pages/Home/Home.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import Services from './pages/Services/Services.tsx';
import './App.sass';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home/></Layout>,
    },
    {
        path: '/about-us',
        element: <Layout><AboutUs/></Layout>,
    },
    {
        path: '/services',
        element: <Layout><Services/></Layout>,
    },
]);
const App: React.FC = () => {
    return (
            <Suspense fallback={null}>
                <RouterProvider router={router}/>
            </Suspense>
        );
};

export default App;
