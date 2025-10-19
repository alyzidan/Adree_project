import { z } from 'zod';
import { TASK_STATUS, TASK_CATEGORY, TASK_PRIORITY } from '@/lib/constants';
export const taskStatusSchema = z.enum([
    TASK_STATUS.TODO,
    TASK_STATUS.IN_PROGRESS,
    TASK_STATUS.COMPLETED,
    TASK_STATUS.CANCELLED,
]);
export const taskCategorySchema = z.enum([
    TASK_CATEGORY.DEVELOPMENT,
    TASK_CATEGORY.DESIGN,
    TASK_CATEGORY.MARKETING,
    TASK_CATEGORY.SALES,
    TASK_CATEGORY.SUPPORT,
    TASK_CATEGORY.OTHER,
]);
export const taskPrioritySchema = z.enum([
    TASK_PRIORITY.LOW,
    TASK_PRIORITY.MEDIUM,
    TASK_PRIORITY.HIGH,
    TASK_PRIORITY.URGENT,
]);
export const createTaskSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(100, 'Title must be at most 100 characters'),
    description: z
        .string()
        .max(500, 'Description must be at most 500 characters')
        .optional(),
    status: taskStatusSchema,
    category: taskCategorySchema,
    priority: taskPrioritySchema,
    assignee: z.string().optional(),
    dueDate: z.string().optional(),
    estimatedHours: z
        .number()
        .min(0, 'Hours must be positive')
        .max(1000, 'Hours must be less than 1000'),
});
export const updateTaskSchema = z.object({
    id: z.string(),
    title: z
        .string()
        .min(1, 'Title is required')
        .max(100, 'Title must be at most 100 characters')
        .optional(),
    description: z
        .string()
        .max(500, 'Description must be at most 500 characters')
        .optional(),
    status: taskStatusSchema.optional(),
    category: taskCategorySchema.optional(),
    priority: taskPrioritySchema.optional(),
    assignee: z.string().optional(),
    dueDate: z.string().optional(),
    estimatedHours: z
        .number()
        .min(0, 'Hours must be positive')
        .max(1000, 'Hours must be less than 1000')
        .optional(),
});
export const taskFiltersSchema = z.object({
    status: z.union([taskStatusSchema, z.literal('all')]).optional(),
    category: z.union([taskCategorySchema, z.literal('all')]).optional(),
    priority: z.union([taskPrioritySchema, z.literal('all')]).optional(),
    assignee: z.string().optional(),
    search: z.string().optional(),
});
