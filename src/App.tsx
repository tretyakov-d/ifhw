import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Page } from './templates/Page';
import { PoliciesPage } from './pages/policies/PoliciesPage';
import { NotFoundPage } from './pages/notFound/NotFoundPage';
import { PolicyPage } from './pages/policy/PolicyPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page />}>
                    <Route path="" element={<Navigate to="/policies" />} />
                    <Route path="policies" element={<PoliciesPage />} />
                    <Route path="policy/:number" element={<PolicyPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
