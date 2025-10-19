import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/button/Button';
import Select from '@/components/ui/select/Select';
import { useTasks } from '../hooks';
function TaskPagination() {
    const { pagination, totalPages, total, setPagination } = useTasks();
    const pageSizeOptions = [
        { value: '5', label: '5 per page' },
        { value: '10', label: '10 per page' },
        { value: '20', label: '20 per page' },
        { value: '50', label: '50 per page' },
    ];
    const handlePrevious = () => {
        if (pagination.page > 1) {
            setPagination({ page: pagination.page - 1 });
        }
    };
    const handleNext = () => {
        if (pagination.page < totalPages) {
            setPagination({ page: pagination.page + 1 });
        }
    };
    const handlePageSizeChange = (value) => {
        setPagination({ pageSize: parseInt(value), page: 1 });
    };
    const startItem = (pagination.page - 1) * pagination.pageSize + 1;
    const endItem = Math.min(pagination.page * pagination.pageSize, total);
    return (_jsxs("div", { className: "flex flex-col items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 sm:flex-row", children: [_jsxs("div", { className: "text-sm text-neutral-600", children: ["Showing", ' ', _jsx("span", { className: "font-medium text-neutral-900", children: startItem }), " to", ' ', _jsx("span", { className: "font-medium text-neutral-900", children: endItem }), " of", ' ', _jsx("span", { className: "font-medium text-neutral-900", children: total }), " results"] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-36", children: _jsx(Select, { options: pageSizeOptions, value: pagination.pageSize.toString(), onValueChange: handlePageSizeChange }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: handlePrevious, disabled: pagination.page === 1, children: _jsx(ChevronLeft, { className: "h-4 w-4" }) }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("span", { className: "text-sm text-neutral-600", children: "Page" }), _jsx("span", { className: "text-sm font-medium text-neutral-900", children: pagination.page }), _jsx("span", { className: "text-sm text-neutral-600", children: "of" }), _jsx("span", { className: "text-sm font-medium text-neutral-900", children: totalPages })] }), _jsx(Button, { variant: "outline", size: "sm", onClick: handleNext, disabled: pagination.page === totalPages, children: _jsx(ChevronRight, { className: "h-4 w-4" }) })] })] })] }));
}
export default TaskPagination;
