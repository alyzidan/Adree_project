export type ValueOf<T> = T[keyof T]

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export type SortOrder = 'asc' | 'desc'

export interface PaginationParams {
  page: number
  pageSize: number
}

export interface PaginationMeta {
  page: number
  pageSize: number
  total: number
  totalPages: number
}

export interface ApiResponse<T> {
  data: T
  meta?: PaginationMeta
}

export interface ApiError {
  message: string
  code?: string
  details?: Record<string, unknown>
}
