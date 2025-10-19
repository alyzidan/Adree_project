import { z } from 'zod';
// Common validation schemas
export const emailSchema = z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address');
export const passwordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number');
export const usernameSchema = z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores');
export const requiredStringSchema = z.string().min(1, 'This field is required');
export const urlSchema = z.string().url('Invalid URL');
export const phoneSchema = z
    .string()
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Invalid phone number');
// Task validation schemas (we'll use these later)
export const taskTitleSchema = z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title must be at most 100 characters');
export const taskDescriptionSchema = z
    .string()
    .max(500, 'Description must be at most 500 characters')
    .optional();
export const estimatedHoursSchema = z
    .number()
    .min(0, 'Hours must be positive')
    .max(1000, 'Hours must be less than 1000');
