import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { AlertCircle } from 'lucide-react';
import Button from '@/components/ui/button/Button';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return (_jsxs("div", { className: "flex min-h-[400px] flex-col items-center justify-center p-8", children: [_jsx(AlertCircle, { className: "mb-4 h-12 w-12 text-danger-500" }), _jsx("h2", { className: "mb-2 text-xl font-semibold text-neutral-900", children: "Something went wrong" }), _jsx("p", { className: "mb-6 max-w-md text-center text-sm text-neutral-600", children: this.state.error?.message ||
                            'An unexpected error occurred. Please try again.' }), _jsx(Button, { onClick: () => {
                            this.setState({ hasError: false, error: undefined });
                            window.location.reload();
                        }, children: "Reload Page" })] }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
