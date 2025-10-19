import { jsx as _jsx } from "react/jsx-runtime";
import { Search } from 'lucide-react';
import Input from '@/components/ui/input/Input';
import { useTaskFilters } from '../hooks';
function TaskSearch() {
    const { searchQuery, handleSearch } = useTaskFilters();
    return (_jsx(Input, { placeholder: "Search tasks by title or description...", value: searchQuery, onChange: (e) => handleSearch(e.target.value), leftIcon: _jsx(Search, { className: "h-4 w-4" }), className: "max-w-md" }));
}
export default TaskSearch;
