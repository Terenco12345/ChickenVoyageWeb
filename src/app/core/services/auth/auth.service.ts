import { Injectable } from "@angular/core";

const TOKEN_NAME = "auth_token";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    /**
    * Get auth token from local storage.
    * @returns Token from local storage
    */
    getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
    }

    /**
     * Set auth token in local storage.
     * @param token Token to set
     */
    setToken(token: string) {
        localStorage.setItem(TOKEN_NAME, token)
    }

    /**
     * Check if authenticated.
     * - Token has to be present
     * - Token has to be not expired
     */
    isAuthenticated() {
        var token = this.getToken();
        return (token !== "" && token !== null && !this.tokenExpired(token));
    }

    /**
     * Check if JWT token has expired
     * @param token 
     */
    private tokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
}