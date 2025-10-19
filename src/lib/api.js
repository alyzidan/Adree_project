const API_BASE_URL = '/api';
export class APIClient {
    constructor(baseURL = API_BASE_URL) {
        Object.defineProperty(this, "baseURL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.baseURL = baseURL;
    }
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };
        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                const error = {
                    message: response.statusText,
                    code: response.status.toString(),
                };
                throw error;
            }
            // Handle 204 No Content
            if (response.status === 204) {
                return {};
            }
            return await response.json();
        }
        catch (error) {
            if (error instanceof Error) {
                throw {
                    message: error.message,
                    code: 'NETWORK_ERROR',
                };
            }
            throw error;
        }
    }
    async get(endpoint, params) {
        const queryString = params
            ? '?' + new URLSearchParams(params).toString()
            : '';
        return this.request(`${endpoint}${queryString}`, {
            method: 'GET',
        });
    }
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE',
        });
    }
}
// Export singleton instance
export const apiClient = new APIClient();
