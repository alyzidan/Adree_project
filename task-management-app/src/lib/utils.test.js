import { describe, it, expect } from 'vitest';
import { cn, formatDate, formatRelativeTime } from './utils';
describe('cn() utility', () => {
    it('should merge class names correctly', () => {
        expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
    });
    it('should handle conditional classes', () => {
        expect(cn('base', true && 'conditional', false && 'hidden')).toBe('base conditional');
    });
    it('should override conflicting Tailwind classes', () => {
        expect(cn('p-4', 'p-8')).toBe('p-8');
    });
    it('should handle undefined and null values', () => {
        expect(cn('base', undefined, null, 'extra')).toBe('base extra');
    });
});
describe('formatDate() utility', () => {
    it('should format date correctly', () => {
        const date = new Date('2024-01-15');
        expect(formatDate(date)).toMatch(/Jan 15, 2024/);
    });
    it('should handle ISO string dates', () => {
        const isoDate = '2024-01-15T00:00:00.000Z';
        expect(formatDate(isoDate)).toMatch(/Jan 1[45], 2024/);
    });
});
describe('formatRelativeTime() utility', () => {
    it('should format recent time as "just now"', () => {
        const now = new Date().toISOString();
        expect(formatRelativeTime(now)).toBe('just now');
    });
    it('should format minutes ago', () => {
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
        expect(formatRelativeTime(fiveMinutesAgo)).toBe('5 minutes ago');
    });
    it('should format hours ago', () => {
        const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
        expect(formatRelativeTime(twoHoursAgo)).toBe('2 hours ago');
    });
    it('should format days ago', () => {
        const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();
        expect(formatRelativeTime(threeDaysAgo)).toBe('3 days ago');
    });
});
