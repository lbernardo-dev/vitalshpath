import { GOOGLE_CLIENT_ID, ADMIN_EMAILS, AUTH_SESSION_KEY, AUTH_TOKEN_KEY } from './config';

interface GoogleUser {
    email: string;
    name: string;
    picture: string;
    sub: string;
}

// Generate random state for CSRF protection
export const generateState = (): string => {
    const state = crypto.randomUUID();
    sessionStorage.setItem('oauth_state', state);
    return state;
};

// Verify state
export const verifyState = (state: string): boolean => {
    const stored = sessionStorage.getItem('oauth_state');
    return stored === state;
};

// Get Google OAuth URL
export const getGoogleAuthUrl = (): string => {
    const state = generateState();
    const redirectUri = `${window.location.origin}${import.meta.env.BASE_URL}/admin/callback`;
    
    const params = new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: 'token id_token',
        scope: 'email profile',
        state: state,
        nonce: crypto.randomUUID(),
    });
    
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

// Parse JWT token (without verification - we verify server-side if needed)
const parseJwt = (token: string): any => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
};

// Handle OAuth callback
export const handleCallback = async (hash: string): Promise<{ success: boolean; user?: GoogleUser; error?: string }> => {
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    const idToken = params.get('id_token');
    const state = params.get('state');
    
    if (!state || !verifyState(state)) {
        return { success: false, error: 'Invalid state' };
    }
    
    if (!idToken) {
        return { success: false, error: 'No ID token received' };
    }
    
    // Decode ID token to get user info
    const user = parseJwt(idToken);
    
    if (!user || !user.email) {
        return { success: false, error: 'Invalid token' };
    }
    
    // Check if email is admin
    if (!ADMIN_EMAILS.includes(user.email.toLowerCase())) {
        return { success: false, error: 'Unauthorized email' };
    }
    
    // Store session
    const session = {
        email: user.email,
        name: user.name,
        picture: user.picture,
        sub: user.sub,
        exp: user.exp,
    };
    
    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    if (accessToken) {
        localStorage.setItem(AUTH_TOKEN_KEY, accessToken);
    }
    
    return { success: true, user: session };
};

// Get current session
export const getSession = (): GoogleUser | null => {
    const stored = localStorage.getItem(AUTH_SESSION_KEY);
    if (!stored) return null;
    
    try {
        const session = JSON.parse(stored) as GoogleUser & { exp?: number };
        
        // Check if expired
        if (session.exp && session.exp < Date.now() / 1000) {
            logout();
            return null;
        }
        
        return session;
    } catch {
        return null;
    }
};

// Logout
export const logout = (): void => {
    localStorage.removeItem(AUTH_SESSION_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
};

// Check if logged in
export const isLoggedIn = (): boolean => {
    return getSession() !== null;
};
