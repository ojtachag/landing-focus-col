import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Layout from './components/Layout/Layout.tsx';
import Home from './pages/Home/Home.tsx';
import './App.sass';
const AboutUsLazy = lazy(()=> import('./pages/AboutUs/AboutUs'));
const ServicesLazy = lazy(()=> import('./pages/Services/Services'));
const PlansLazy = lazy(()=> import('./pages/Plans/Plans'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home/></Layout>,
    },
    {
        path: '/about-us',
        element: <Layout><AboutUsLazy/></Layout>,
    },
    {
        path: '/services',
        element: <Layout><ServicesLazy/></Layout>,
    },
    {
        path: '/plans',
        element: <Layout><PlansLazy/></Layout>,
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
