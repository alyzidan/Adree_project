import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from '@/routes';
import { LoadingFallback } from './components/shared/LoadingFallback';
import PageLayout from '@/components/layout/PageLayout';
import { Toaster } from '@/components/ui/toast';
// Routes wrapper
const AppRoutes = () => useRoutes(routes);
function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx(PageLayout, { children: _jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(AppRoutes, {}) }) }), _jsx(Toaster, {})] }));
}
export default App;
