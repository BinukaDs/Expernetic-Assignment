import React from 'react';
import { Routes } from 'react-router-dom';
const DashBoard = React.lazy(() => import('./routes/Dashboard'))


const Routes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<DashBoard />}></Route>

        </Routes>
    )
}

export default Routes