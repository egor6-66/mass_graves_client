import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';


import mainRoutes from './main';


function Routing() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname.split('/')[1]}>
                {mainRoutes}
                <Route path="*" element={<Navigate to="/main" replace />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Routing;
