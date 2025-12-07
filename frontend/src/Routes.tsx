import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
const DashBoard = React.lazy(() => import('./routes/Dashboard'));


const AppRoutes = () => {
    const location = useLocation();
    return (
        <Suspense fallback={null}>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<DashBoard />}></Route>
            </Routes>
        </Suspense>
    );
}

export default AppRoutes