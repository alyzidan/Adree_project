import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Select from './Select';
const meta = {
    title: 'UI/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (_jsx("div", { className: "w-80", children: _jsx(Story, {}) })),
    ],
};
export default meta;
const sampleOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'mango', label: 'Mango' },
];
const taskStatusOptions = [
    { value: 'todo', label: 'To Do' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
];
const taskCategoryOptions = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Support' },
    { value: 'other', label: 'Other' },
];
export const Default = {
    render: () => {
        const [value, setValue] = useState('');
        return (_jsx(Select, { options: sampleOptions, value: value, onValueChange: setValue, placeholder: "Select a fruit" }));
    },
};
export const WithLabel = {
    render: () => {
        const [value, setValue] = useState('');
        return (_jsx(Select, { label: "Favorite Fruit", options: sampleOptions, value: value, onValueChange: setValue, placeholder: "Choose a fruit" }));
    },
};
export const WithError = {
    render: () => {
        const [value, setValue] = useState('');
        return (_jsx(Select, { label: "Status", options: taskStatusOptions, value: value, onValueChange: setValue, error: "Please select a status" }));
    },
};
export const WithHelperText = {
    render: () => {
        const [value, setValue] = useState('');
        return (_jsx(Select, { label: "Category", options: taskCategoryOptions, value: value, onValueChange: setValue, helperText: "Select the task category" }));
    },
};
export const Disabled = {
    render: () => {
        return (_jsx(Select, { label: "Disabled Select", options: sampleOptions, disabled: true, placeholder: "Cannot select" }));
    },
};
export const WithDisabledOptions = {
    render: () => {
        const [value, setValue] = useState('');
        const options = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2 (disabled)', disabled: true },
            { value: 'option3', label: 'Option 3' },
            { value: 'option4', label: 'Option 4 (disabled)', disabled: true },
            { value: 'option5', label: 'Option 5' },
        ];
        return (_jsx(Select, { label: "Select with Disabled Options", options: options, value: value, onValueChange: setValue }));
    },
};
export const TaskStatus = {
    render: () => {
        const [value, setValue] = useState('todo');
        return (_jsx(Select, { label: "Task Status", options: taskStatusOptions, value: value, onValueChange: setValue }));
    },
};
export const TaskCategory = {
    render: () => {
        const [value, setValue] = useState('');
        return (_jsx(Select, { label: "Task Category", options: taskCategoryOptions, value: value, onValueChange: setValue, placeholder: "Select category" }));
    },
};
export const AllStates = {
    render: () => {
        const [value1, setValue1] = useState('');
        const [value2, setValue2] = useState('');
        const [value3, setValue3] = useState('');
        return (_jsxs("div", { className: "flex w-full flex-col gap-6", children: [_jsx(Select, { label: "Default", options: sampleOptions, value: value1, onValueChange: setValue1 }), _jsx(Select, { label: "With Helper", options: sampleOptions, value: value2, onValueChange: setValue2, helperText: "Choose your favorite" }), _jsx(Select, { label: "With Error", options: sampleOptions, value: value3, onValueChange: setValue3, error: "This field is required" }), _jsx(Select, { label: "Disabled", options: sampleOptions, disabled: true, placeholder: "Cannot select" })] }));
    },
};
