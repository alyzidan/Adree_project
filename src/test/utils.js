import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// Custom render with Router wrapper
export function renderWithRouter(ui, options) {
    return render(ui, {
        wrapper: ({ children }) => _jsx(BrowserRouter, { children: children }),
        ...options,
    });
}
// Re-export everything from testing library
export * from '@testing-library/react';
export { renderWithRouter as render };
